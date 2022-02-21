import type { ColorModeMap } from '~/@types';

export const colorModeMap: ColorModeMap = {
  light: 'light',
  dark: 'dark',
} as const;

export const lightColorMap = {
  color: '#000',
  backgroundColor: '#fff',
} as const;

export const darkColorMap = {
  ...lightColorMap,
  color: '#fff',
  backgroundColor: '#000',
} as const;
