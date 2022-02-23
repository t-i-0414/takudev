import * as React from 'react';
import { useContext } from 'react';

import { globalStyle } from '~/consts';
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
      <style jsx>{globalStyle}</style>
      <style jsx>
        {`
          div {
            background-color: ${baseColor};
          }
        `}
      </style>
    </>
  );
};
