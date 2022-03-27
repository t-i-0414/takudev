import React from 'react';
import isEqual from 'react-fast-compare';

import { ColorMode } from '~/@types';
import { ColorTheme } from '~/themes';

import { PageContentTemplate } from './PageContentTemplate';

type Props = {
  children: React.ReactNode;
  hrefToHome: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
  initialColorMode?: ColorMode;
  hasHeader?: boolean;
  hasFooter?: boolean;
};
export const PageTemplate: React.FC<Props> = React.memo(
  ({
    children,
    hrefToHome,
    initialColorMode,
    hasHeader = true,
    hasFooter = true,
  }: Props) => (
    <ColorTheme mode={initialColorMode}>
      <PageContentTemplate
        hrefToHome={hrefToHome}
        hasHeader={hasHeader}
        hasFooter={hasFooter}
      >
        {children}
      </PageContentTemplate>
    </ColorTheme>
  ),
  isEqual,
);
PageTemplate.displayName = 'PageTemplate';
