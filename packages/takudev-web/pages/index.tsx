import { GraphQLClient } from 'graphql-request';
import Head from 'next/head';
import React from 'react';
import isEqual from 'react-fast-compare';
import { HomePageContent } from '~/components/features';
import { PageTemplate } from '~/components/templates';
import { getSdk } from '~/graphql';
import type { NextPage, GetStaticProps } from 'next';

type ArticleSummaryList = React.ComponentPropsWithoutRef<
  typeof HomePageContent
>['articleSummaryList'];

type Props = {
  articleSummaryList: ArticleSummaryList;
};

const HomePage: NextPage<Props> = React.memo(
  ({ articleSummaryList }) => (
    <>
      <Head>
        <title>Taku.dev</title>
        <meta name='description' content="This is Takuya Iwashiro's Dev Blog" />
      </Head>

      <PageTemplate>
        <HomePageContent articleSummaryList={articleSummaryList} />
      </PageTemplate>
    </>
  ),
  isEqual,
);
HomePage.displayName = 'HomePage';

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = new GraphQLClient('http://127.0.0.1:1337/graphql', {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_JWT_TOKEN}`,
    },
  });
  const sdk = getSdk(client);
  const { articles } = await sdk.getAllArticleSummary();

  if (!articles) {
    return {
      props: {
        articleSummaryList: [],
      },
    };
  }

  const articleSummaryList = articles.data.map(({ attributes }) => {
    if (!attributes) {
      return null;
    }

    const tagList = attributes.tags
      ? attributes.tags.data.map(tag => {
          if (!tag.attributes) {
            return null;
          }

          return tag.attributes.name;
        })
      : [];

    const filteredTagList = tagList.filter(
      (tag): tag is string => tag !== null,
    );

    return {
      slug: attributes.slug,
      title: attributes.title,
      publishedAt: new Date(attributes.publishedAt),
      tagList: filteredTagList,
    };
  });

  const filteredArticleSummaryList = articleSummaryList.filter(
    (articleSummary): articleSummary is ArticleSummaryList[number] =>
      articleSummary !== null,
  );

  return {
    props: {
      articleSummaryList: filteredArticleSummaryList,
    },
  };
};

export default HomePage;
