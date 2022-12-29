import * as Types from './index.d';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type GetAllArticleSummaryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllArticleSummaryQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', slug: string, title: string, publishedAt?: any | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', name: string } | null }> } | null } | null }> } | null };


export const GetAllArticleSummaryDocument = gql`
    query getAllArticleSummary {
  articles {
    data {
      id
      attributes {
        slug
        title
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
    getAllArticleSummary(variables?: Types.GetAllArticleSummaryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetAllArticleSummaryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetAllArticleSummaryQuery>(GetAllArticleSummaryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllArticleSummary', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;