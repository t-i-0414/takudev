import * as Types from './index.d';

import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type FindArticleByIdQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']['input']>;
}>;


export type FindArticleByIdQuery = { __typename?: 'Query', article?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, description: string, content: string, publishedAt?: any | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', name: string } | null }> } | null } | null } | null } | null };

export type GetAllArticleSummaryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllArticleSummaryQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, description: string, content: string, publishedAt?: any | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', name: string } | null }> } | null } | null }> } | null };


export const FindArticleByIdDocument = gql`
    query findArticleById($id: ID) {
  article(id: $id) {
    data {
      id
      attributes {
        title
        slug
        description
        content
        publishedAt
        tags {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
    `;
export const GetAllArticleSummaryDocument = gql`
    query getAllArticleSummary {
  articles {
    data {
      id
      attributes {
        title
        slug
        description
        content
        publishedAt
        tags {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    findArticleById(variables?: Types.FindArticleByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.FindArticleByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.FindArticleByIdQuery>(FindArticleByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findArticleById', 'query');
    },
    getAllArticleSummary(variables?: Types.GetAllArticleSummaryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetAllArticleSummaryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetAllArticleSummaryQuery>(GetAllArticleSummaryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllArticleSummary', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;