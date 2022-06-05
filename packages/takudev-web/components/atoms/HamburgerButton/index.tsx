import React from 'react';
import isEqual from 'react-fast-compare';

import styles from './HamburgerButton.module.scss';

type Props = {
  ariaLabel: React.ButtonHTMLAttributes<HTMLButtonElement>['aria-label'];
  onClick: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
} & React.ComponentPropsWithoutRef<'button'>;

export const HamburgerButton: React.FC<Props> = React.memo(
  ({ ariaLabel, onClick, ...rest }) => (
    <button
      type='button'
      aria-label={ariaLabel}
      className={styles.button}
      onClick={onClick}
      {...rest}
    >
      <span className={styles.icon} />
    </button>
  ),
  isEqual,
);
HamburgerButton.displayName = 'Logo';
