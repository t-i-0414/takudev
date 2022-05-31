import { createContext } from 'react';

import { colorModeMap } from '~/consts';
import type { ColorMode } from '~/types';

type Context = {
  colorMode: ColorMode | null;
  handleColorMode: () => void;
};

const defaultContext: Context = {
  colorMode: colorModeMap.lightMode,
  handleColorMode: () => {},
};

export const ColorContext = createContext<Context>(defaultContext);
