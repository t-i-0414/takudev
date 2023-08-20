import React from 'react';
import isEqual from 'react-fast-compare';
import { ColorModeSwitchButton } from '../ColorModeSwitchButton';
import styles from './PageHeader.module.scss';
import { HamburgerButton, Logo } from '~/components/atoms';

type Props = {
  ariaLabel: string;
  hamburgerButtonId: string;
  hrefToHome: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
  onClickHamburgerButton: () => void;
};

export const PageHeaderView: React.FC<Props> = React.memo(
  ({ ariaLabel, hamburgerButtonId, hrefToHome, onClickHamburgerButton }) => (
    <header className={styles.header}>
      <nav aria-label='global menu' className={styles['left-content']}>
        <HamburgerButton
          id={hamburgerButtonId}
          ariaLabel={ariaLabel}
          onClick={onClickHamburgerButton}
        />
      </nav>

      <div className={styles['center-content']}>
        <h1>
          <Logo href={hrefToHome} />
        </h1>
      </div>

      <div className={styles['right-content']}>
        <ColorModeSwitchButton />
      </div>
    </header>
  ),
  isEqual,
);
PageHeaderView.displayName = 'PageHeaderView';
