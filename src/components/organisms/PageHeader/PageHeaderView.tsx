import React from 'react';
import isEqual from 'react-fast-compare';

// import styles from './PageHeader.module.scss';
import { css } from 'styled-system/css';
import { Logo } from '~/components/atoms/Logo';

type Props = {
  hrefToHome: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
};

export const PageHeaderView: React.FC<Props> = React.memo(
  ({ hrefToHome }) => (
    <header
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '56px',
        backgroundColor: '#0D0D0D',
      })}
    >
      <h1>
        <Logo href={hrefToHome} />
      </h1>
    </header>
  ),
  isEqual,
);
PageHeaderView.displayName = 'PageHeaderView';
