import React from 'react';
import isEqual from 'react-fast-compare';

import { HamburgerButton, Logo } from '~/components/atoms';

import { ColorModeSwitchButton } from '../ColorModeSwitchButton';

import styles from './PageHeader.module.scss';

type Props = {
  hrefToHome: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
  onClickHamburgerButton: () => void;
};

export const PageHeaderView: React.FC<Props> = React.memo(
  ({ hrefToHome, onClickHamburgerButton }) => (
    <header className={styles.header}>
      <nav aria-label='global menu' className={styles['left-content']}>
        <HamburgerButton
          ariaLabel='open global menu'
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
