import React from 'react';
import isEqual from 'react-fast-compare';

import { PageHeader, PageFooter } from '~/components/organisms';

import { css } from 'styled-system/css';

type Props = {
  children: React.ReactNode;
  hasHeader?: boolean;
  hasFooter?: boolean;
};
export const PageTemplate: React.FC<Props> = React.memo(
  ({ children, hasHeader = true, hasFooter = true }: Props) => (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(var(--vh, 1vh) * 100)',
        background: '#fafafa',
      })}
    >
      {hasHeader && (
        <>
          <div
            className={css({
              position: 'fixed',
              zIndex: 1,
              width: '100%',
            })}
          >
            <PageHeader />
          </div>
          <div
            className={css({
              height: '56px',
            })}
          />
        </>
      )}
      <main
        className={css({
          flex: 1,
          overflowX: 'hidden',
        })}
      >
        {children}
      </main>
      {hasFooter && <PageFooter />}
    </div>
  ),
  isEqual,
);
PageTemplate.displayName = 'PageTemplate';
