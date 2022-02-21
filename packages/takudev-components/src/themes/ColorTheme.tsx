import * as React from 'react';
import { createContext, useCallback, useMemo, useState } from 'react';

import type { ColorMode } from '~/@types';
import { colorModeMap } from '~/consts';

const COLOR_SCHEME_PROPERTY_NAME = 'prefers-color-scheme';
const localStorageKey = COLOR_SCHEME_PROPERTY_NAME;

type ThemeContext = {
  colorMode: ColorMode;
  handleColorMode: () => void;
};
const initialContext: ThemeContext = {
  colorMode: colorModeMap.light,
  handleColorMode: () => {},
};
export const ColorThemeContext = createContext<ThemeContext>(initialContext);

export const ColorTheme: React.FC = ({ children }) => {
  const initializeColorMode = useCallback((): ColorMode => {
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
  const [colorMode, setColorMode] = useState<ColorMode>(initialColorMode);

  const handleColorMode = useCallback(() => {
    const newColorMode: ColorMode =
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
