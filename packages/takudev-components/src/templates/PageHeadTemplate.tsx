import React from 'react';
import isEqual from 'react-fast-compare';
import { Helmet } from 'react-helmet';

export const PageHeadTemplate = React.memo(
  () => (
    <Helmet>
      <link href='https://unpkg.com/sanitize.css' rel='stylesheet' />
      <link rel='stylesheet' href='https://use.typekit.net/rba3ian.css' />
    </Helmet>
  ),
  isEqual,
);
PageHeadTemplate.displayName = 'PageHeadTemplate';
