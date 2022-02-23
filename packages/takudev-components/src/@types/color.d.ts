export type ColorMode = 'light' | 'dark';
export type ColorModeMap = { [keyAndValue in ColorMode]: keyAndValue };

export type LightColorPaletteMap = Readonly<{
  baseColor: string;
  textColor: string;
  borderColor: string;
  sublabelColor: string;
  shadowColor: string;
  primaryColor: string;
  secondaryColor: string;
  warningColor: string;
}>;

export type DarkColorPaletteMap = Readonly<
  LightColorPaletteMap & {
    headerColor: string;
    footerColor: string;
  }
>;
