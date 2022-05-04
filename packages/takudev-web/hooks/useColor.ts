import { useContext } from 'react';

import type { ColorMode } from '~/@types';
import { lightColorPaletteMap, darkColorPaletteMap } from '~/consts';
import { ColorContext } from '~/contexts';

export const useColor = (specifiedColorMode?: ColorMode) => {
  const { colorMode: contextColorMode } = useContext(ColorContext);
  const colorMode = specifiedColorMode || contextColorMode;

  return colorMode === 'light' ? lightColorPaletteMap : darkColorPaletteMap;
};
