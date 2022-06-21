import React, { useState, useCallback } from 'react';
import isEqual from 'react-fast-compare';

import { hrefMap } from '~/consts';

import { MenuModal } from '../MenuModal';

import { PageHeaderView } from './PageHeaderView';

export const PageHeader = React.memo(() => {
  const [isOpenMenuModal, setIsOpenMenuModal] = useState(false);

  const handleClickHamburgerButton = useCallback(() => {
    setIsOpenMenuModal(true);
  }, []);

  const handleClickCloseButton = useCallback(() => {
    setIsOpenMenuModal(false);
  }, []);

  return (
    <>
      <PageHeaderView
        hrefToHome={hrefMap.home}
        onClickHamburgerButton={handleClickHamburgerButton}
      />
      <MenuModal
        isOpen={isOpenMenuModal}
        onClickCloseButton={handleClickCloseButton}
      />
    </>
  );
}, isEqual);
PageHeader.displayName = 'PageHeader';
