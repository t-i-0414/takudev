import React from 'react';
import isEqual from 'react-fast-compare';

import styles from './HamburgerButton.module.scss';

type Props = {
  id: string;
  ariaLabel: string;
  onClick: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
} & React.ComponentPropsWithoutRef<'button'>;

export const HamburgerButton: React.FC<Props> = React.memo(
  ({ id, ariaLabel, onClick, ...rest }) => (
    <button
      id={id}
      type='button'
      className={`${styles.button} hamburger-button`}
      aria-label={ariaLabel}
      onClick={onClick}
      {...rest}
    >
      <span aria-hidden className={styles.icon} />
    </button>
  ),
  isEqual,
);
HamburgerButton.displayName = 'Logo';
