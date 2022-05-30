import React from 'react';
import isEqual from 'react-fast-compare';

import { PageHeaderPresentation } from './PageHeaderPresentation';

export const PageHeader = React.memo(() => {
  const hrefToHome = '/';
  const handleClickHamburgerButton = () => {};

  return (
    <PageHeaderPresentation
      hrefToHome={hrefToHome}
      onClickHamburgerButton={handleClickHamburgerButton}
    />
  );
}, isEqual);
PageHeader.displayName = 'PageHeader';
