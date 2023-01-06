import { ParsedUrlQuery } from 'node:querystring';
import Head from 'next/head';
import React from 'react';
import isEqual from 'react-fast-compare';
import { ArticleContent } from '~/components/features';
import { PageTemplate } from '~/components/templates';
import { getGraphqlSdk } from '~/graphql';
import {
  isNotNullable,
  filterNotNullableElement,
  normalizeArticle,
} from '~/lib';
import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';

type Props = {
  article: ReturnType<typeof normalizeArticle>;
};

const ArticlePage: NextPage<Props> = React.memo(({ article }) => {
  if (!isNotNullable(article)) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{`Taku.dev | ${article.title}`}</title>
        <meta name='description' content={article.description} />
      </Head>

      <PageTemplate>
        <ArticleContent
          title={article.title}
          tagList={article.tagList}
          publishedAt={article.publishedAt}
          content={article.content}
        />
      </PageTemplate>
    </>
  );
}, isEqual);
ArticlePage.displayName = 'HomePage';

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<{
  slug: string;
}> = async () => {
  const graphqlSdk = getGraphqlSdk();
  const { articles } = await graphqlSdk.getAllArticleSummary();

  if (!isNotNullable(articles)) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = filterNotNullableElement(
    articles.data.map(data => {
      const normalizedArticle = normalizeArticle({ data });

      if (!isNotNullable(normalizedArticle)) {
        return null;
      }

      return {
        params: {
          slug: `${normalizedArticle.id}_${normalizedArticle.slug}`,
        },
      };
    }),
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (!isNotNullable(params)) {
    return {
      props: {
        article: null,
      },
    };
  }

  const graphqlSdk = getGraphqlSdk();
  const { article } = await graphqlSdk.findArticleById({
    id: params.slug.split('_')[0],
  });

  const normalizedArticle = normalizeArticle(article);

  return {
    props: {
      article: normalizedArticle,
    },
  };
};

export default ArticlePage;
