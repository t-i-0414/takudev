import { useCallback, useState, useEffect } from 'react';
import {
  colorModeMap,
  colorModeLocalstorageKey,
  lightColorPaletteMap,
  darkColorPaletteMap,
  colorPaletteMapKeyList,
} from '~/consts';
import type { ColorMode } from '~/types';
import { kebabize } from '~/utils';

const { lightMode, darkMode } = colorModeMap;

export const useColorProvider = (_colorMode?: ColorMode) => {
  const [colorMode, setColorMode] = useState<ColorMode | null>(null);

  useEffect(() => {
    const rawInitialColorMode = localStorage.getItem(colorModeLocalstorageKey);

    const initialColorMode: ColorMode | null =
      rawInitialColorMode === null ? null : JSON.parse(rawInitialColorMode);

    setColorMode(_colorMode ?? initialColorMode);
  }, [_colorMode]);

  const handleColorMode = useCallback(() => {
    const newColorMode: ColorMode =
      colorMode === lightMode ? darkMode : lightMode;

    setColorMode(newColorMode);
    localStorage.setItem(
      colorModeLocalstorageKey,
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
