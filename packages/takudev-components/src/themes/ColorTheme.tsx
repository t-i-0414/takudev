import * as React from 'react';
import { createContext, useCallback, useMemo, useState } from 'react';

type TColorMode = 'light' | 'dark';
type TColorModeMap = { [keyAndValue in TColorMode]: keyAndValue };
type TColorThemeContext = {
  colorMode: TColorMode;
  handleColorMode: () => void;
};

const COLOR_SCHEME_PROPERTY_NAME = 'prefers-color-scheme';
const localStorageKey = COLOR_SCHEME_PROPERTY_NAME;
const colorModeMap: TColorModeMap = {
  light: 'light',
  dark: 'dark',
} as const;
const initialContext: TColorThemeContext = {
  colorMode: colorModeMap.light,
  handleColorMode: () => {},
};

export const ColorThemeContext =
  createContext<TColorThemeContext>(initialContext);

export const ColorTheme: React.FC = ({ children }) => {
  const initializeColorMode = useCallback((): TColorMode => {
    const preservedColorMode = localStorage[localStorageKey];

    if (!preservedColorMode) {
      if (typeof window !== 'undefined') {
        const isDarkModeWindow = window.matchMedia(
          `(${COLOR_SCHEME_PROPERTY_NAME}: dark)`,
        ).matches;

        if (isDarkModeWindow) {
          localStorage[localStorageKey] = colorModeMap.dark;
        } else {
          localStorage[localStorageKey] = colorModeMap.light;
        }
      } else {
        localStorage[localStorageKey] = colorModeMap.light;
      }
    }

    return localStorage[localStorageKey];
  }, []);

  const initialColorMode = useMemo(initializeColorMode, [initializeColorMode]);

  const [colorMode, setColorMode] = useState<TColorMode>(initialColorMode);

  const handleColorMode = useCallback(() => {
    const newColorMode: TColorMode =
      colorMode === colorModeMap.light ? colorModeMap.dark : colorModeMap.light;

    setColorMode(newColorMode);
    localStorage[localStorageKey] = newColorMode;
  }, [colorMode, setColorMode]);

  const providerValue = useMemo(
    () => ({ colorMode, handleColorMode }),
    [colorMode, handleColorMode],
  );

  return (
    <ColorThemeContext.Provider value={providerValue}>
      {children}
    </ColorThemeContext.Provider>
  );
};
