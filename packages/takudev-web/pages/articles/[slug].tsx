import { ParsedUrlQuery } from 'node:querystring';
import { GraphQLClient } from 'graphql-request';
import Head from 'next/head';
import React from 'react';
import isEqual from 'react-fast-compare';
import { PageTemplate } from '~/components/templates';
import { getSdk } from '~/graphql';
import { isNotNullable, filterNotNullableElement } from '~/lib';
import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';

type Props = {
  article: any;
};

const ArticlePage: NextPage<Props> = React.memo(
  ({ article }) => (
    <>
      <Head>
        <title>{`Taku.dev | ${article.data.attributes.title}`}</title>
        <meta name='description' content="This is Takuya Iwashiro's Dev Blog" />
      </Head>

      <PageTemplate>
        <p>{article.data.attributes.title}</p>
      </PageTemplate>
    </>
  ),
  isEqual,
);
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

  if (!isNotNullable(article) || !isNotNullable(article.data)) {
    return {
      props: {
        article: null,
      },
    };
  }

  return {
    props: {
      article,
    },
  };
};

export default ArticlePage;
