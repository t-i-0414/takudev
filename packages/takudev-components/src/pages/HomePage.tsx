import React from 'react';
import isEqual from 'react-fast-compare';

import { ColorMode } from '~/@types';
import { HomePageContent } from '~/organisms';
import { PageTemplate } from '~/templates';

type Props = {
  hrefToHome: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
  initialColorMode?: ColorMode;
};
export const HomePage: React.FC<Props> = React.memo(
  ({ hrefToHome, initialColorMode }: Props) => (
    <PageTemplate hrefToHome={hrefToHome} initialColorMode={initialColorMode}>
      <HomePageContent />
    </PageTemplate>
  ),
  isEqual,
);
HomePage.displayName = 'HomePage';
