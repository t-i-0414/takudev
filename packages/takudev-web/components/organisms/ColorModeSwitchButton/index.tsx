import React, { useContext, useCallback } from 'react';
import isEqual from 'react-fast-compare';

import { colorModeMap } from '~/consts';
import { ColorContext } from '~/contexts';

import { ColorModeSwitchButtonPresentation } from './ColorModeSwitchButtonPresentation';

export const ColorModeSwitchButton: React.FC = React.memo(() => {
  const { colorMode, handleColorMode } = useContext(ColorContext);

  const handleClick = useCallback(() => {
    handleColorMode();

    document.documentElement.style.setProperty(
      `--color-mode-switch-button-translate`,
      colorMode === colorModeMap.darkMode
        ? 'translate(-88%, -50%)'
        : 'translate(-12%, -50%)',
    );
  }, [colorMode, handleColorMode]);

  return (
    <ColorModeSwitchButtonPresentation
      colorMode={colorMode}
      onClick={handleClick}
    />
  );
}, isEqual);
ColorModeSwitchButton.displayName = 'ColorModeSwitchButton';
