import { GraphQLClient } from 'graphql-request';
import Head from 'next/head';
import React from 'react';
import isEqual from 'react-fast-compare';
import { HomePageContent } from '~/components/features';
import { PageTemplate } from '~/components/templates';
import { getSdk } from '~/graphql';
import {
  isNotNullable,
  filterNotNullableElement,
  normalizeArticle,
} from '~/lib';
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
        <meta
          name='description'
          content="This is Takuya Iwashiro's Web Dev Blog"
        />
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
    articles.data.map(data => {
      const normalizedArticle = normalizeArticle({ data });

      if (!isNotNullable(normalizedArticle)) {
        return null;
      }

      return {
        title: normalizedArticle.title,
        slug: `${normalizedArticle.id}_${normalizedArticle.slug}`,
        tagList: normalizedArticle.tagList,
        publishedAt: new Date(normalizedArticle.publishedAt),
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
