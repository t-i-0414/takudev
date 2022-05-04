import React from 'react';
import { PageTemplate } from '~/components/templates';

type Props = {
  children: React.ReactNode;
};

export const LightThemeTemplate: React.FC<Props> = ({ children }) => (
  <PageTemplate
    hrefToHome={'#'}
    initialColorMode='light'
    hasHeader={false}
    hasFooter={false}
  >
    {children}
  </PageTemplate>
);

export const DarkThemeTemplate: React.FC<Props> = ({ children }) => (
  <PageTemplate
    hrefToHome={'#'}
    initialColorMode='dark'
    hasHeader={false}
    hasFooter={false}
  >
    {children}
  </PageTemplate>
);
