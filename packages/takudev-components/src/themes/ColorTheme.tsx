import React, { createContext, useCallback, useMemo, useState } from 'react';

import type { ColorMode } from '~/@types';
import { colorModeMap } from '~/consts';

const { light: lightMode, dark: darkMode } = colorModeMap;
const COLOR_SCHEME_PROPERTY_NAME = 'prefers-color-scheme';
const localStorageKey = COLOR_SCHEME_PROPERTY_NAME;

type ThemeContext = {
  colorMode: ColorMode;
  handleColorMode: () => void;
};
const defaultContextValue: ThemeContext = {
  colorMode: lightMode,
  handleColorMode: () => {},
};
export const ColorThemeContext =
  createContext<ThemeContext>(defaultContextValue);

type Props = {
  children: React.ReactNode;
  mode?: ColorMode;
};
export const ColorTheme: React.FC<Props> = ({ children, mode }: Props) => {
  const initializeColorMode = useCallback((): ColorMode => {
    const preservedColorMode = localStorage.getItem(localStorageKey);
    const preservedColorModeExists =
      preservedColorMode === lightMode || preservedColorMode === darkMode;

    if (!preservedColorModeExists) {
      if (typeof window !== 'undefined') {
        const isDarkModeWindow = window.matchMedia(
          `(${COLOR_SCHEME_PROPERTY_NAME}: dark)`,
        ).matches;

        if (isDarkModeWindow) {
          localStorage.setItem(localStorageKey, darkMode);
        } else {
          localStorage.setItem(localStorageKey, lightMode);
        }
      } else {
        localStorage.setItem(localStorageKey, lightMode);
      }
    }

    return (localStorage.getItem(localStorageKey) as ColorMode) || lightMode;
  }, []);

  const initialColorMode = useMemo(
    () => mode || initializeColorMode(),
    [mode, initializeColorMode],
  );

  const [colorMode, setColorMode] = useState<ColorMode>(initialColorMode);

  const handleColorMode = useCallback(() => {
    const newColorMode: ColorMode =
      colorMode === lightMode ? darkMode : lightMode;

    setColorMode(newColorMode);
    localStorage.setItem(localStorageKey, newColorMode);
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
