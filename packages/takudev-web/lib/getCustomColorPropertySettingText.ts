import {
  colorModeMap,
  colorPaletteMapKeyList,
  lightColorPaletteMap,
  darkColorPaletteMap,
} from '~/consts';
import { kebabize } from './kebabize';

export const getCustomColorPropertySettingText = () =>
  colorPaletteMapKeyList
    .map(
      key => `document.documentElement.style.setProperty(
      '--${kebabize(key)}',
      colorMode === '${colorModeMap.darkMode}'
        ? '${darkColorPaletteMap[key as keyof typeof darkColorPaletteMap]}'
        : '${lightColorPaletteMap[key as keyof typeof lightColorPaletteMap]}'
    );`,
    )
    .join('\n');
