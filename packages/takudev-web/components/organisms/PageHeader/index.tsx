import React, { useState, useCallback } from 'react';
import isEqual from 'react-fast-compare';

import { hrefMap } from '~/consts';

import { MenuModal } from '../MenuModal';

import { PageHeaderView } from './PageHeaderView';

export const PageHeader = React.memo(() => {
  const [isOpenMenuModal, setIsOpenMenuModal] = useState(false);
  const [isCloseMenuModal, setIsCloseMenuModal] = useState(false);

  const handleClickHamburgerButton = useCallback(() => {
    setIsOpenMenuModal(true);
    setIsCloseMenuModal(false);
  }, []);

  const handleClickCloseButton = useCallback(() => {
    setIsOpenMenuModal(false);
    setIsCloseMenuModal(true);
  }, []);

  return (
    <>
      <PageHeaderView
        hrefToHome={hrefMap.home}
        onClickHamburgerButton={handleClickHamburgerButton}
      />
      <MenuModal
        isOpen={isOpenMenuModal}
        isClose={isCloseMenuModal}
        onClickCloseButton={handleClickCloseButton}
      />
    </>
  );
}, isEqual);
PageHeader.displayName = 'PageHeader';
