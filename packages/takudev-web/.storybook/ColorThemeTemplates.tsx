import React from 'react';
import { PageTemplate } from '~/components/templates';
import { colorModeMap } from '~/consts';

const { lightMode, darkMode } = colorModeMap;

type Props = {
  children: React.ReactNode;
};

export const LightThemeTemplate: React.FC<Props> = ({ children }) => (
  <PageTemplate
    // initialColorMode={lightMode}
    hasHeader={false}
    hasFooter={false}
  >
    {children}
  </PageTemplate>
);

export const DarkThemeTemplate: React.FC<Props> = ({ children }) => (
  <PageTemplate
    // initialColorMode={darkMode}
    hasHeader={false}
    hasFooter={false}
  >
    {children}
  </PageTemplate>
);
