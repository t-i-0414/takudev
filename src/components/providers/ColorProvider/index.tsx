import React, { useMemo } from 'react';
import isEqual from 'react-fast-compare';

import { useColorProvider } from './useColorProvider';

import type { ColorMode } from '~/types';

import { ColorContext } from '~/contexts';

type Props = {
  children: React.ReactNode;
  colorMode?: ColorMode;
};
export const ColorProvider: React.FC<Props> = React.memo(
  ({ children, colorMode: _colorMode }) => {
    const { colorMode, handleColorMode } = useColorProvider(_colorMode);

    const value = useMemo(
      () => ({ colorMode, handleColorMode }),
      [colorMode, handleColorMode],
    );

    return (
      <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
  },
  isEqual,
);
ColorProvider.displayName = 'ColorProvider';
