import React from 'react';
import isEqual from 'react-fast-compare';

import { css } from 'styled-system/css';

type Props = {
  href: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
} & React.ComponentPropsWithoutRef<'a'>;

export const Logo: React.FC<Props> = React.memo(
  ({ href, ...rest }) => (
    <a
      href={href}
      className={`${css({
        display: 'block',
        width: 'fit-content',
        fontFamily:
          'futura-pt, forma-djr-micro, system-ui, -apple-system, "Segoe UI", robot, helvetica, arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        fontSize: '28px',
        fontStyle: 'italic',
        fontWeight: 700,
        color: '#fcfcfc',
        textDecoration: 'none',
        cursor: 'pointer',
        _hover: {
          opacity: 0.8,
        },
        _focusVisible: {
          opacity: 0.8,
        },
        _active: {
          opacity: 0.6,
        },
      })} logo`}
      {...rest}
    >
      Taku.dev
    </a>
  ),
  isEqual,
);
Logo.displayName = 'Logo';
