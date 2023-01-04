import { ParsedUrlQuery } from 'node:querystring';
import { GraphQLClient } from 'graphql-request';
import Head from 'next/head';
import React from 'react';
import isEqual from 'react-fast-compare';
import { PageTemplate } from '~/components/templates';
import { getSdk } from '~/graphql';
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
        <p>{article.title}</p>
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
      paths: [],
      fallback: false,
    };
  }

  const paths = filterNotNullableElement(
    articles.data.map(({ id, attributes }) => {
      if (!isNotNullable(id) || !isNotNullable(attributes)) {
        return null;
      }

      return {
        params: {
          slug: `${id}_${attributes.slug}`,
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

  const { article } = await sdk.findArticleById({
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
