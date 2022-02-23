import type {
  ColorModeMap,
  LightColorPaletteMap,
  DarkColorPaletteMap,
} from '~/@types';

export const colorModeMap: ColorModeMap = {
  light: 'light',
  dark: 'dark',
} as const;

export const lightColorPaletteMap: LightColorPaletteMap = {
  baseColor: '#fafafa',
  textColor: '#0d0d0d',
  borderColor: '#4f4f4f',
  sublabelColor: '#666666',
  shadowColor: 'rgba(0, 0, 0, 0.16)',
  primaryColor: '#7cefff',
  secondaryColor: '#b9f5b1',
  warningColor: '#f23535',
} as const;

export const darkColorPaletteMap: DarkColorPaletteMap = {
  ...lightColorPaletteMap,
  baseColor: '#0d0d0d',
  textColor: '#fcfcfc',
  borderColor: '#dddddd',
  sublabelColor: '#afafaf',
  shadowColor: 'rgba(255, 255, 255, 0.8)',
  headerColor: '#666666',
  footerColor: '#666666',
} as const;
