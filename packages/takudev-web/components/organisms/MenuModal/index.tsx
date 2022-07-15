import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import isEqual from 'react-fast-compare';
import { MENU_MODAL_ROOT_ELEMENT_ID, hrefMap } from '~/consts';
import { MenuModalView } from './MenuModalView';

type Props = {
  isOpen: boolean;
  isClose: boolean;
  onClickCloseButton: () => void;
};

export const MenuModal: React.FC<Props> = React.memo(
  ({ isOpen, isClose, onClickCloseButton }) => {
    const menuModalRef = useRef<Element | null>(null);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      menuModalRef.current = document.querySelector(
        `#${MENU_MODAL_ROOT_ELEMENT_ID}`,
      );
      setMounted(true);
    }, []);

    return mounted
      ? ReactDOM.createPortal(
          <MenuModalView
            isOpen={isOpen}
            isClose={isClose}
            hrefToContact={hrefMap.contact}
            onClickCloseButton={onClickCloseButton}
          />,
          menuModalRef.current as HTMLElement,
        )
      : null;
  },
  isEqual,
);
MenuModal.displayName = 'MenuModal';
