export type ColorMode = 'light' | 'dark';
export type ColorModeMap = { [keyAndValue in ColorMode]: keyAndValue };

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
