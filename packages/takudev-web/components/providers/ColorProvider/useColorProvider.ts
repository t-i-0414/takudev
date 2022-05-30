import { useCallback, useState, useEffect } from 'react';

import type { ColorMode } from '~/@types';
import {
  colorModeMap,
  colorModeLocalstorageKey,
  lightColorPaletteMap,
  darkColorPaletteMap,
} from '~/consts';

import { kebabize } from '~/utils';

const { lightMode, darkMode } = colorModeMap;

export const useColorProvider = (_colorMode?: ColorMode) => {
  const [colorMode, setColorMode] = useState<ColorMode | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode',
    ) as ColorMode;

    setColorMode(initialColorValue);
  }, []);

  const handleColorMode = useCallback(() => {
    const newColorMode: ColorMode =
      colorMode === lightMode ? darkMode : lightMode;

    setColorMode(newColorMode);
    localStorage.setItem(
      colorModeLocalstorageKey,
      JSON.stringify(newColorMode),
    );

    Object.keys(lightColorPaletteMap).forEach(key => {
      document.documentElement.style.setProperty(
        `--${kebabize(key)}`,
        colorMode === colorModeMap.darkMode
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
