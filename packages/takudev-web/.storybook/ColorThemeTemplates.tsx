import React from 'react';
import { ColorProvider } from '~/components/providers';
import { PageTemplate } from '~/components/templates';
import {
  colorModeMap,
  lightColorPaletteMap,
  darkColorPaletteMap,
} from '~/consts';
import { kebabize } from '~/lib';

const { lightMode, darkMode } = colorModeMap;

type Props = {
  children: React.ReactNode;
};

export const LightThemeTemplate: React.FC<Props> = ({ children }) => {
  document.documentElement.style.setProperty(
    '--color-mode-switch-button-translate',
    'translate(-88%, -50%)',
  );
  Object.keys(lightColorPaletteMap).forEach(key => {
    document.documentElement.style.setProperty(
      `--${kebabize(key)}`,
      lightColorPaletteMap[key as keyof typeof lightColorPaletteMap],
    );
  });

  return (
    <ColorProvider colorMode={lightMode}>
      <PageTemplate hasHeader={false} hasFooter={false}>
        {children}
      </PageTemplate>
    </ColorProvider>
  );
};

export const DarkThemeTemplate: React.FC<Props> = ({ children }) => {
  document.documentElement.style.setProperty(
    '--color-mode-switch-button-translate',
    'translate(-12%, -50%)',
  );
  Object.keys(darkColorPaletteMap).forEach(key => {
    document.documentElement.style.setProperty(
      `--${kebabize(key)}`,
      darkColorPaletteMap[key as keyof typeof darkColorPaletteMap],
    );
  });

  return (
    <ColorProvider colorMode={darkMode}>
      <PageTemplate hasHeader={false} hasFooter={false}>
        {children}
      </PageTemplate>
    </ColorProvider>
  );
};
