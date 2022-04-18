import React, { useContext } from 'react';
import isEqual from 'react-fast-compare';

import { useColor } from '~/hooks';
import { ColorThemeContext } from '~/themes';

export const HomePageContent: React.FC = React.memo(() => {
  const { colorMode, handleColorMode } = useContext(ColorThemeContext);
  const { textColor, shadowColor, borderColor } = useColor(colorMode);

  return (
    <>
      <h1>Taku.Dev</h1>
      <button type='button' onClick={handleColorMode}>
        Change color mode
      </button>
      <style jsx>{`
        h1 {
          color: ${textColor};
          margin: 0;
          border: 4px solid ${borderColor};
        }
        p {
          color: ${textColor};
          box-shadow: 10px 5px 5px ${shadowColor};
        }
      `}</style>
    </>
  );
}, isEqual);
HomePageContent.displayName = 'HomePageContent';
