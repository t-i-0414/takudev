import React from 'react';
import isEqual from 'react-fast-compare';

import { PageHeaderView } from './PageHeaderView';

export const PageHeader = React.memo(() => {
  const hrefToHome = '/';
  const handleClickHamburgerButton = () => {};

  return (
    <PageHeaderView
      hrefToHome={hrefToHome}
      onClickHamburgerButton={handleClickHamburgerButton}
    />
  );
}, isEqual);
PageHeader.displayName = 'PageHeader';
