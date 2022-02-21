import type { ColorMode } from '~/@types';
import { lightColorMap, darkColorMap } from '~/consts';

export const useColor = (colorMode: ColorMode) =>
  colorMode === 'light' ? lightColorMap : darkColorMap;
