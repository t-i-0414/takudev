import Link from 'next/link';
import React, { ComponentPropsWithoutRef } from 'react';
import isEqual from 'react-fast-compare';

import { CloseButton } from '~/components/atoms';

import styles from './MenuModal.module.scss';

type Props = {
  isOpen: boolean;
  isClose: boolean;
  hrefToContact: ComponentPropsWithoutRef<typeof Link>['href'];
  onClickCloseButton: () => void;
};

export const MenuModalView: React.FC<Props> = React.memo(
  ({ isOpen, isClose, hrefToContact, onClickCloseButton }) => (
    <div
      className={`${styles['wrapper-base']} ${
        isOpen && styles['wrapper-open']
      } ${isClose && styles['wrapper-close']}`}
    >
      <div className={styles['close-button-container']}>
        <CloseButton
          ariaLabel='Close Menu Modal'
          onClick={onClickCloseButton}
        />
      </div>
      <div className={styles['menu-list-container']}>
        <ul>
          <li>
            <Link href={hrefToContact}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  ),
  isEqual,
);
MenuModalView.displayName = 'MenuModalView';
