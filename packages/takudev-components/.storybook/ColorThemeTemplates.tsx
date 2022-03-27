import React from 'react';
import { PageTemplate } from '~/templates';

export const LightThemeTemplate: React.FC = ({ children }) => (
  <PageTemplate
    hrefToHome={'#'}
    initialColorMode='light'
    hasHeader={false}
    hasFooter={false}
  >
    {children}
  </PageTemplate>
);

export const DarkThemeTemplate: React.FC = ({ children }) => (
  <PageTemplate
    hrefToHome={'#'}
    initialColorMode='dark'
    hasHeader={false}
    hasFooter={false}
  >
    {children}
  </PageTemplate>
);
