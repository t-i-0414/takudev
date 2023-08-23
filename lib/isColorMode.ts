import type { ColorMode } from '~/types';

import { colorModeMap } from '~/consts';

export const isColorMode = (value: unknown): value is ColorMode =>
  Object.keys(colorModeMap).some(
    mode => colorModeMap[mode as keyof typeof colorModeMap] === value,
  );
