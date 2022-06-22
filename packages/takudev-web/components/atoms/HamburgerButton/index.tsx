import React from 'react';
import isEqual from 'react-fast-compare';

import styles from './HamburgerButton.module.scss';

type Props = {
  onClick: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
} & React.ComponentPropsWithoutRef<'button'>;

export const HamburgerButton: React.FC<Props> = React.memo(
  ({ onClick, ...rest }) => (
    <button
      type='button'
      className={`${styles.button} hamburger-button`}
      onClick={onClick}
      {...rest}
    >
      <span className={styles.icon} />
    </button>
  ),
  isEqual,
);
HamburgerButton.displayName = 'Logo';
