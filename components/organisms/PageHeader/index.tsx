import React, { useState, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import { MenuModal } from '../MenuModal';
import { PageHeaderView } from './PageHeaderView';
import { hrefMap } from '~/consts';

export const PageHeader = React.memo(() => {
  const ariaLabel = 'Open Menu Modal';
  const menuModalLabelledBy = 'hamburger-button';
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
        ariaLabel={ariaLabel}
        hamburgerButtonId={menuModalLabelledBy}
        hrefToHome={hrefMap.home}
        onClickHamburgerButton={handleClickHamburgerButton}
      />
      <MenuModal
        isOpen={isOpenMenuModal}
        isClose={isCloseMenuModal}
        ariaLabelledBy={menuModalLabelledBy}
        onClickCloseButton={handleClickCloseButton}
      />
    </>
  );
}, isEqual);
PageHeader.displayName = 'PageHeader';
