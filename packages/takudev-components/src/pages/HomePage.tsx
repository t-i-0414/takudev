import * as React from 'react';
import { useContext } from 'react';

import { useColor } from '~/hooks';
import { PageTemplate } from '~/templates';
import { ColorThemeContext } from '~/themes';

export const HomePage: React.FC = () => {
  const { colorMode, handleColorMode } = useContext(ColorThemeContext);
  const { textColor, shadowColor } = useColor(colorMode);

  return (
    <PageTemplate>
      <h1>Home Page</h1>
      <p>{colorMode}</p>
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
    </PageTemplate>
  );
};
HomePage.displayName = 'HomePage';
