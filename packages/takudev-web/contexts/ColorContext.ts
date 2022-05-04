import { createContext } from 'react';

import type { ColorMode } from '~/@types';
import { colorModeMap } from '~/consts';

type Context = {
  colorMode: ColorMode;
  handleColorMode: () => void;
};

const defaultContext: Context = {
  colorMode: colorModeMap.light,
  handleColorMode: () => {},
};

export const ColorContext = createContext<Context>(defaultContext);
