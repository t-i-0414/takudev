export type ColorMode = 'lightMode' | 'darkMode';

export type ColorModeMap = {
  [key in ColorMode]: key;
};

export type ColorPaletteMapKey =
  | 'primaryColor'
  | 'secondaryColor'
  | 'warningColor'
  | 'white'
  | 'paleWhite'
  | 'gray'
  | 'black'
  | 'baseColor'
  | 'textColor'
  | 'borderColor'
  | 'sublabelColor'
  | 'shadowColor'
  | 'headerColor'
  | 'footerColor';

export type ColorPaletteMap = Readonly<Record<ColorPaletteMapKey, string>>;
