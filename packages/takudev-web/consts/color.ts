import type { ColorModeMap, ColorPaletteMap } from '~/@types';

export const colorModeLocalstorageKey = 'colorMode';

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
  black: '#0d0d0d',
  baseColor: '#fafafa',
  textColor: '#0d0d0d',
  borderColor: '#4f4f4f',
  sublabelColor: '#666666',
  shadowColor: 'rgba(0, 0, 0, 0.16)',
  headerColor: '#0D0D0D',
  footerColor: '#0D0D0D',
} as const;

export const darkColorPaletteMap: ColorPaletteMap = {
  ...lightColorPaletteMap,
  baseColor: '#0d0d0d',
  textColor: '#fcfcfc',
  borderColor: '#dddddd',
  sublabelColor: '#afafaf',
  shadowColor: 'rgba(255, 255, 255, 0.8)',
  headerColor: '#666666',
  footerColor: '#666666',
} as const;
