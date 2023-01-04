import Head from 'next/head';
import React from 'react';
import isEqual from 'react-fast-compare';
import { HomePageContent } from '~/components/features';
import { PageTemplate } from '~/components/templates';
import { getGraphqlSdk } from '~/graphql';
import {
  isNotNullable,
  filterNotNullableElement,
  normalizeArticle,
} from '~/lib';
import type { NextPage, GetStaticProps } from 'next';

type Props = {
  articleSummaryList: React.ComponentPropsWithoutRef<
    typeof HomePageContent
  >['articleSummaryList'];
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
  const graphqlSdk = getGraphqlSdk();
  const { articles } = await graphqlSdk.getAllArticleSummary();

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
