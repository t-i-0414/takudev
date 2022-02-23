import React from 'react';

import { colorModeMap, globalStyle } from '~/consts';
import { ColorTheme } from '~/themes';

export const LightColorThemeTemplate: React.FC = ({ children }) => (
  <ColorTheme mode={colorModeMap.light}>
    <>
      {children} <style jsx>{globalStyle}</style>
    </>
  </ColorTheme>
);
