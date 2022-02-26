import React, { useContext } from 'react';
import isEqual from 'react-fast-compare';
import { Helmet } from 'react-helmet';

import { useColor } from '~/hooks';
import { ColorThemeContext } from '~/themes';
import { handleCustomVhVariable } from '~/utils';

type Props = {
  children: React.ReactNode;
  hasHeader: boolean;
  hasFooter: boolean;
};
export const PageContentTemplate: React.FC<Props> = React.memo(
  ({ children, hasHeader, hasFooter }: Props) => {
    const { colorMode } = useContext(ColorThemeContext);
    const { baseColor, textColor } = useColor(colorMode);

    handleCustomVhVariable();

    return (
      <>
        <Helmet>
          <link href='https://unpkg.com/sanitize.css' rel='stylesheet' />
          <link rel='stylesheet' href='https://use.typekit.net/rba3ian.css' />
        </Helmet>
        <div className='page-wrapper'>
          {hasHeader && <header>header</header>}
          <main className='main-container'>{children}</main>
          {hasFooter && <footer>footer</footer>}
        </div>
        <style jsx>{`
          *,
          ::before,
          ::after {
            transition: background-color 0.2s ease, color 0.2s ease,
              border-color 0.2s ease, box-shadow 0.2s ease;
            font-family: forma-djr-micro, system-ui, -apple-system, 'Segoe UI',
              Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji';
          }
          .page-wrapper {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            min-height: calc(var(--vh, 1vh) * 100);
            background-color: ${baseColor};
          }
          .main-container {
            flex: 1;
            overflow-x: hidden;
          }
          header,
          footer {
            color: ${textColor};
          }
        `}</style>
      </>
    );
  },
  isEqual,
);
PageContentTemplate.displayName = 'PageContentTemplate';
