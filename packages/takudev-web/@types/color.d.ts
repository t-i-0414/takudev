export type ColorMode = 'light' | 'dark';
export type ColorModeMap = { [keyAndValue in ColorMode]: keyAndValue };

export type ColorPaletteMap = Readonly<{
  baseColor: string;
  textColor: string;
  borderColor: string;
  sublabelColor: string;
  shadowColor: string;
  primaryColor: string;
  secondaryColor: string;
  warningColor: string;
  headerColor: string;
  headerTextColor: string;
  footerColor: string;
  footerTextColor: string;
}>;
