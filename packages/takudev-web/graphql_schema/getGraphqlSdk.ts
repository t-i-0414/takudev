import { GraphQLClient } from 'graphql-request';
import { getSdk } from './__generated__';

export const getGraphqlSdk = () => {
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

  return getSdk(client);
};
