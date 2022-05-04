import React from 'react';
import isEqual from 'react-fast-compare';

import type { ColorMode } from '~/@types';
import { ColorProvider } from '~/components/providers';

import { PageContentLayouter } from '../organisms';

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
    <ColorProvider colorMode={initialColorMode}>
      <PageContentLayouter
        hrefToHome={hrefToHome}
        hasHeader={hasHeader}
        hasFooter={hasFooter}
      >
        {children}
      </PageContentLayouter>
    </ColorProvider>
  ),
  isEqual,
);
PageTemplate.displayName = 'PageTemplate';
