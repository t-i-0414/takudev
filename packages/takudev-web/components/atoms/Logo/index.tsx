import React from 'react';
import isEqual from 'react-fast-compare';

import styles from './Logo.module.scss';

type Props = {
  href: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
} & React.ComponentPropsWithoutRef<'a'>;

export const Logo: React.FC<Props> = React.memo(
  ({ color, href, ...rest }) => (
    <a href={href} className={`${styles.logo} logo`} {...rest} tabIndex={0}>
      Taku.dev
    </a>
  ),
  isEqual,
);
Logo.displayName = 'Logo';
