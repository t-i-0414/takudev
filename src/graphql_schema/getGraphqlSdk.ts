import { GraphQLClient } from 'graphql-request';

import { getSdk } from './__generated__';

export const getGraphqlSdk = () => {
  const client = new GraphQLClient(`${process.env.STRAPI_HOST}/graphql`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_JWT_TOKEN}`,
    },
  });

  return getSdk(client);
};
