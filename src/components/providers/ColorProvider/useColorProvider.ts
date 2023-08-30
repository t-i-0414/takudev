import { useCallback, useState, useEffect } from 'react';

import type { ColorMode } from '~/types';

import {
  colorModeMap,
  colorModeLocalStorageKey,
  lightColorPaletteMap,
  darkColorPaletteMap,
  colorPaletteMapKeyList,
} from '~/consts';
import { kebabize, isColorMode } from '~/lib';

const { lightMode, darkMode } = colorModeMap;

export const useColorProvider = (_colorMode?: ColorMode) => {
  const [colorMode, setColorMode] = useState<ColorMode | null>(null);

  useEffect(() => {
    const storedColorMode = localStorage.getItem(colorModeLocalStorageKey);
    const parsedColorMode = JSON.parse(storedColorMode ?? 'null');

    const initialColorMode: ColorMode | null = isColorMode(parsedColorMode)
      ? parsedColorMode
      : null;

    if (_colorMode || initialColorMode) {
      setColorMode(_colorMode ?? initialColorMode);
    }
  }, [_colorMode]);

  const handleColorMode = useCallback(() => {
    const newColorMode: ColorMode =
      colorMode === lightMode ? darkMode : lightMode;

    setColorMode(newColorMode);
    localStorage.setItem(
      colorModeLocalStorageKey,
      JSON.stringify(newColorMode),
    );

    colorPaletteMapKeyList.forEach(key => {
      document.documentElement.style.setProperty(
        `--${kebabize(key)}`,
        newColorMode === colorModeMap.darkMode
          ? darkColorPaletteMap[key as keyof typeof darkColorPaletteMap]
          : lightColorPaletteMap[key as keyof typeof lightColorPaletteMap],
      );
    });
  }, [colorMode, setColorMode]);

  return {
    colorMode,
    handleColorMode,
  };
};
