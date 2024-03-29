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
  | 'darkGray'
  | 'black'
  | 'baseColor'
  | 'textColor'
  | 'borderColor'
  | 'subLabelColor'
  | 'shadowColor'
  | 'headerColor'
  | 'footerColor'
  | 'linkColor';

export type ColorPaletteMap = Readonly<Record<ColorPaletteMapKey, string>>;
