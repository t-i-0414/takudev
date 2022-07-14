import React from 'react';
import isEqual from 'react-fast-compare';
import { HamburgerButton, Logo } from '~/components/atoms';
import { ColorModeSwitchButton } from '../ColorModeSwitchButton';
import styles from './PageHeader.module.scss';

type Props = {
  isOpenMenuModal: boolean;
  hrefToHome: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
  onClickHamburgerButton: () => void;
};

export const PageHeaderView: React.FC<Props> = React.memo(
  ({ isOpenMenuModal, hrefToHome, onClickHamburgerButton }) => (
    <header className={styles.header}>
      <nav aria-label='global menu' className={styles['left-content']}>
        <HamburgerButton
          aria-expanded={isOpenMenuModal}
          aria-label='open global menu'
          aria-controls='menu-modal'
          onClick={onClickHamburgerButton}
        />
      </nav>

      <div className={styles['center-content']}>
        <Logo href={hrefToHome} />
      </div>

      <div className={styles['right-content']}>
        <ColorModeSwitchButton />
      </div>
    </header>
  ),
  isEqual,
);
PageHeaderView.displayName = 'PageHeaderView';
