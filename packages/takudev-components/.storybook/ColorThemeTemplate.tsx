import React, { useContext } from 'react';

import { ColorMode } from '~/@types';
import { globalStyle } from '~/consts';
import { useColor } from '~/hooks';
import { ColorTheme, ColorThemeContext } from '~/themes';
import { handleWindowVerticalHeight } from '~/utils';

type WrapperProps = {
  children: React.ReactNode;
  colorMode: ColorMode;
};
const ColorThemeTemplateWrapper: React.FC<WrapperProps> = ({
  children,
  colorMode,
}) => <ColorTheme mode={colorMode}>{children}</ColorTheme>;

type TemplateProps = {
  colorMode: ColorMode;
};
export const ColorThemeTemplate: React.FC<TemplateProps> = ({
  children,
  colorMode: specifiedColorMode,
}) => {
  const { colorMode } = useContext(ColorThemeContext);
  const { baseColor } = useColor(colorMode);

  handleWindowVerticalHeight();

  return (
    <ColorThemeTemplateWrapper colorMode={specifiedColorMode}>
      <div className='wrapper'>
        <div className='container'>{children}</div>
      </div>
      <style jsx>{globalStyle}</style>
      <style jsx>
        {`
          .wrapper {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            min-height: calc(var(--vh, 1vh) * 100);
            background-color: ${baseColor};
          }
          .container {
            flex: 1;
            overflow-x: hidden;
          }
        `}
      </style>
    </ColorThemeTemplateWrapper>
  );
};
