import React, { useContext } from 'react';

import { globalStyle } from '~/consts';
import { useColor } from '~/hooks';
import { ColorTheme, ColorThemeContext } from '~/themes';
import { handleCustomVhVariable } from '~/utils';

const PageTemplateWrapper: React.FC = ({ children }) => (
  <ColorTheme>{children}</ColorTheme>
);

export const PageTemplate: React.FC = ({ children }) => {
  const { colorMode } = useContext(ColorThemeContext);
  const { baseColor, textColor } = useColor(colorMode);

  handleCustomVhVariable();

  return (
    <>
      <PageTemplateWrapper>
        <div className='page-wrapper'>
          <header>header</header>
          <main>{children}</main>
          <footer>footer</footer>
        </div>
      </PageTemplateWrapper>
      <style jsx>{globalStyle}</style>
      <style jsx>
        {`
          .page-wrapper {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            min-height: calc(var(--vh, 1vh) * 100);
            background-color: ${baseColor};
          }
          header,
          footer {
            color: ${textColor};
          }
          main {
            flex: 1;
            overflow-x: hidden;
          }
        `}
      </style>
    </>
  );
};
