import { createContext } from 'react';

import type { ColorMode } from '~/types';

import { colorModeMap } from '~/consts';

type Context = {
  colorMode: ColorMode | null;
  handleColorMode: () => void;
};

const defaultContext: Context = {
  colorMode: colorModeMap.lightMode,
  handleColorMode: () => {},
};

export const ColorContext = createContext<Context>(defaultContext);
