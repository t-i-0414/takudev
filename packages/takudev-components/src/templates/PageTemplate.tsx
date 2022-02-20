import * as React from 'react';
import { useContext } from 'react';

import { ColorTheme, ColorThemeContext } from '~/themes';

export const PageTemplate: React.FC = ({ children }) => {
  const { colorMode } = useContext(ColorThemeContext);

  return (
    <>
      <ColorTheme>
        <div>{children}</div>
      </ColorTheme>
      <style jsx>
        {`
          div {
            transition: all 0.2s ease;
            background-color: ${colorMode === 'light' ? '#fff' : '#000'};
          }
        `}
      </style>
    </>
  );
};
