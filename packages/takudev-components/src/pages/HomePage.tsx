import * as React from 'react';

import { ColorMode } from '~/@types';
import { HomePageContent } from '~/organisms';
import { PageTemplate } from '~/templates';

type Props = {
  initialColorMode?: ColorMode;
};
export const HomePage: React.FC<Props> = React.memo(
  ({ initialColorMode }: Props) => (
    <PageTemplate initialColorMode={initialColorMode}>
      <HomePageContent />
    </PageTemplate>
  ),
);
HomePage.displayName = 'HomePage';
HomePage.defaultProps = {
  initialColorMode: undefined,
};
