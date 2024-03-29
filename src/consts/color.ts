import type {
  ColorModeMap,
  ColorPaletteMap,
  ColorPaletteMapKey,
} from '~/types';

export const colorModeLocalStorageKey = 'colorMode';

export const colorModeMap: ColorModeMap = {
  lightMode: 'lightMode',
  darkMode: 'darkMode',
} as const;

export const lightColorPaletteMap: ColorPaletteMap = {
  primaryColor: '#7cefff',
  secondaryColor: '#b9f5b1',
  warningColor: '#f23535',
  white: '#fff',
  paleWhite: '#fcfcfc',
  gray: '#ddd',
  darkGray: '#4f4f4f',
  black: '#0d0d0d',
  baseColor: '#fafafa',
  textColor: '#0d0d0d',
  borderColor: '#4f4f4f',
  subLabelColor: '#666666',
  shadowColor: 'rgba(0, 0, 0, 0.16)',
  headerColor: '#0D0D0D',
  footerColor: '#0D0D0D',
  linkColor: '#0000ee',
} as const;

export const darkColorPaletteMap: ColorPaletteMap = {
  ...lightColorPaletteMap,
  baseColor: '#0d0d0d',
  textColor: '#fcfcfc',
  borderColor: '#dddddd',
  subLabelColor: '#afafaf',
  shadowColor: 'rgba(255, 255, 255, 0.8)',
  headerColor: '#666666',
  footerColor: '#666666',
  linkColor: '#7cefff',
} as const;

export const colorPaletteMapKeyList = [
  ...new Set([
    ...(Object.keys(lightColorPaletteMap) as ColorPaletteMapKey[]),
    ...(Object.keys(darkColorPaletteMap) as ColorPaletteMapKey[]),
  ]),
];
