import React from 'react';
import isEqual from 'react-fast-compare';

// import { ModalMenu } from '../ModalMenu';

import { PageHeaderView } from './PageHeaderView';

export const PageHeader = React.memo(() => {
  const hrefToHome = '/';
  const handleClickHamburgerButton = () => {};

  return (
    <>
      <PageHeaderView
        hrefToHome={hrefToHome}
        onClickHamburgerButton={handleClickHamburgerButton}
      />
      {/* <ModalMenu /> */}
    </>
  );
}, isEqual);
PageHeader.displayName = 'PageHeader';
