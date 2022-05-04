import type { ColorMode } from '~/@types';
import { lightColorPaletteMap, darkColorPaletteMap } from '~/consts';

export const useColor = (colorMode: ColorMode) =>
  colorMode === 'light' ? lightColorPaletteMap : darkColorPaletteMap;
