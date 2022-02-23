import React from 'react';

import { colorModeMap, globalStyle } from '~/consts';
import { ColorTheme } from '~/themes';

export const DarkColorThemeTemplate: React.FC = ({ children }) => (
  <ColorTheme mode={colorModeMap.dark}>
    <>
      {children}
      <style jsx>{globalStyle}</style>
    </>
  </ColorTheme>
);
