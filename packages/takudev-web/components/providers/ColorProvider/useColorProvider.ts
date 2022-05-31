import { useCallback, useState, useEffect } from 'react';

import {
  colorModeMap,
  colorModeLocalstorageKey,
  lightColorPaletteMap,
  darkColorPaletteMap,
} from '~/consts';
import type { ColorMode } from '~/types';

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
        newColorMode === colorModeMap.darkMode
          ? darkColorPaletteMap[key as keyof typeof darkColorPaletteMap]
          : lightColorPaletteMap[key as keyof typeof lightColorPaletteMap],
      );
    });

    document.documentElement.style.setProperty(
      `--color-mode-switch-button-translate`,
      newColorMode === colorModeMap.darkMode
        ? 'translate(-88%, -50%)'
        : 'translate(-12%, -50%)',
    );
  }, [colorMode, setColorMode]);

  return {
    colorMode,
    handleColorMode,
  };
};
