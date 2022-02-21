import * as React from 'react';
import { useContext } from 'react';

import { useColor } from '~/hooks';
import { ColorTheme, ColorThemeContext } from '~/themes';

export const PageTemplate: React.FC = ({ children }) => {
  const { colorMode } = useContext(ColorThemeContext);
  const { baseColor } = useColor(colorMode);

  return (
    <>
      <ColorTheme>
        <div>{children}</div>
      </ColorTheme>
      <style jsx>
        {`
          div {
            transition: all 0.2s ease;
            background-color: ${baseColor};
          }
        `}
      </style>
    </>
  );
};
