export type ColorMode = 'lightMode' | 'darkMode';

export type ColorModeMap = {
  [key in ColorMode]: key;
};

export type ColorPaletteMap = Readonly<{
  primaryColor: string;
  secondaryColor: string;
  warningColor: string;
  white: string;
  paleWhite: string;
  gray: string;
  black: string;
  baseColor: string;
  textColor: string;
  borderColor: string;
  sublabelColor: string;
  shadowColor: string;
  headerColor: string;
  footerColor: string;
}>;
