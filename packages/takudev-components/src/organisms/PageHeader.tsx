import React from 'react';
import isEqual from 'react-fast-compare';

export const PageHeader = React.memo(
  () => <header>PageHeader</header>,
  isEqual,
);
PageHeader.displayName = 'PageHeader';
