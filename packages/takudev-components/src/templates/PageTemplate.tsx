import React from 'react';

import { ColorMode } from '~/@types';
import { ColorTheme } from '~/themes';

import { PageContentTemplate } from './PageContentTemplate';

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
    <ColorTheme mode={initialColorMode}>
      <PageContentTemplate hasHeader={hasHeader} hasFooter={hasFooter}>
        {children}
      </PageContentTemplate>
    </ColorTheme>
  ),
);
PageTemplate.displayName = 'PageTemplate';
PageTemplate.defaultProps = {
  initialColorMode: undefined,
  hasHeader: true,
  hasFooter: true,
};
