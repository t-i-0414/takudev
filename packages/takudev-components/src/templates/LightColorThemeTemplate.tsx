import React from 'react';

import { colorModeMap } from '~/consts';
import { ColorTheme } from '~/themes';

export const LightColorThemeTemplate: React.FC = ({ children }) => (
  <ColorTheme mode={colorModeMap.light}>{children}</ColorTheme>
);
