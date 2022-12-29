import { GraphQLClient } from 'graphql-request';
import Head from 'next/head';
import React from 'react';
import isEqual from 'react-fast-compare';
import { HomePageContent } from '~/components/features';
import { PageTemplate } from '~/components/templates';
import { getSdk } from '~/graphql';
import { isNotNullable, filterNotNullableElement } from '~/lib';
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
  const shouldAuthenticate = process.env.STAGE !== 'development';

  const client = new GraphQLClient(
    `${process.env.STRAPI_HOST}/graphql`,
    shouldAuthenticate
      ? {
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_JWT_TOKEN}`,
          },
        }
      : {},
  );

  const sdk = getSdk(client);

  const { articles } = await sdk.getAllArticleSummary();

  if (!isNotNullable(articles)) {
    return {
      props: {
        articleSummaryList: [],
      },
    };
  }

  const articleSummaryList = filterNotNullableElement(
    articles.data.map(({ attributes }) => {
      if (!isNotNullable(attributes)) {
        return null;
      }

      const tagList = isNotNullable(attributes.tags)
        ? filterNotNullableElement(
            attributes.tags.data.map(tag => {
              if (!isNotNullable(tag) || !isNotNullable(tag.attributes)) {
                return null;
              }

              return tag.attributes.name;
            }),
          )
        : [];

      return {
        slug: attributes.slug,
        title: attributes.title,
        publishedAt: new Date(attributes.publishedAt),
        tagList,
      };
    }),
  );

  return {
    props: {
      articleSummaryList,
    },
  };
};

export default HomePage;
