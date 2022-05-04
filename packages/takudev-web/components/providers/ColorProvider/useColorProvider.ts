import { useCallback, useMemo, useState } from 'react';

import type { ColorMode } from '~/@types';
import { colorModeMap } from '~/consts';

const { light: lightMode, dark: darkMode } = colorModeMap;
const COLOR_SCHEME_PROPERTY_NAME = 'prefers-color-scheme';
const localStorageKey = COLOR_SCHEME_PROPERTY_NAME;

export const useColorProvider = (_colorMode?: ColorMode) => {
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
    () => _colorMode || initializeColorMode(),
    [_colorMode, initializeColorMode],
  );

  const [colorMode, setColorMode] = useState<ColorMode>(initialColorMode);

  const handleColorMode = useCallback(() => {
    const newColorMode: ColorMode =
      colorMode === lightMode ? darkMode : lightMode;

    setColorMode(newColorMode);
    localStorage.setItem(localStorageKey, newColorMode);
  }, [colorMode, setColorMode]);

  return {
    colorMode,
    handleColorMode,
  };
};
