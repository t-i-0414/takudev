import * as React from 'react';
import { useContext } from 'react';

import { Typography } from '~/atoms';
import { useColor } from '~/hooks';
import { ColorThemeContext } from '~/themes';

export const HomePageContent: React.FC = React.memo(() => {
  const { colorMode, handleColorMode } = useContext(ColorThemeContext);
  const { textColor, shadowColor } = useColor(colorMode);

  return (
    <>
      <h1>Taku.Dev</h1>
      <Typography>Takuya Iwashiro</Typography>
      <Typography>{colorMode}</Typography>
      <button type='button' onClick={handleColorMode}>
        Change color mode
      </button>
      <style jsx>{`
        h1 {
          color: ${textColor};
          margin: 0;
          border: 10px solid ${textColor};
        }
        p {
          color: ${textColor};
          box-shadow: 10px 5px 5px ${shadowColor};
        }
      `}</style>
    </>
  );
});
HomePageContent.displayName = 'HomePageContent';
