import React from 'react';
import isEqual from 'react-fast-compare';

import type { ColorMode } from '~/@types';
import { ColorTheme } from '~/themes';

import { PageContentTemplate } from './PageContentTemplate';
import { PageHeadTemplate } from './PageHeadTemplate';

type Props = {
  children: React.ReactNode;
  initialColorMode?: ColorMode;
  hasHeader?: boolean;
  hasFooter?: boolean;
};
export const PageTemplate: React.FC<Props> = React.memo(
  ({
    children,
    initialColorMode,
    hasHeader = true,
    hasFooter = true,
  }: Props) => (
    <>
      <PageHeadTemplate />
      <ColorTheme mode={initialColorMode}>
        <PageContentTemplate hasHeader={hasHeader} hasFooter={hasFooter}>
          {children}
        </PageContentTemplate>
      </ColorTheme>
    </>
  ),
  isEqual,
);
PageTemplate.displayName = 'PageTemplate';
PageTemplate.defaultProps = {
  initialColorMode: undefined,
  hasHeader: true,
  hasFooter: true,
};
