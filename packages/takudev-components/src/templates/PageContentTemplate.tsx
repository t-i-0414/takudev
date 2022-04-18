import React, { useContext, useEffect } from 'react';
import isEqual from 'react-fast-compare';
import { throttle } from 'throttle-debounce';

import { useColor } from '~/hooks';
import { PageHeader } from '~/organisms';
import { ColorThemeContext } from '~/themes';
import { handleCustomVh, handleViewPort } from '~/utils';

type Props = {
  children: React.ReactNode;
  hrefToHome: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
  hasHeader: boolean;
  hasFooter: boolean;
};
export const PageContentTemplate: React.FC<Props> = React.memo(
  ({ children, hrefToHome, hasHeader, hasFooter }: Props) => {
    const { colorMode } = useContext(ColorThemeContext);
    const { baseColor, textColor } = useColor(colorMode);

    useEffect(() => {
      handleCustomVh();
      handleViewPort();

      const throttledHandleCustomVhVariable = throttle(16, handleCustomVh);
      const throttledHandleViewPort = throttle(16, handleViewPort);

      window.addEventListener('resize', throttledHandleCustomVhVariable);
      window.addEventListener('resize', throttledHandleViewPort);

      return () => {
        window.removeEventListener('resize', throttledHandleCustomVhVariable);
        window.removeEventListener('resize', throttledHandleViewPort);
      };
    }, []);

    return (
      <>
        <div className='page-wrapper'>
          {hasHeader && <PageHeader hrefToHome={hrefToHome} />}
          <main className='main-container'>{children}</main>
          {hasFooter && <footer>footer</footer>}
        </div>
        <style jsx>{`
          *,
          ::before,
          ::after {
            background-color: ${baseColor};
            font-family: forma-djr-micro, system-ui, -apple-system, 'Segoe UI',
              Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji';
            transition: background-color 0.2s ease, color 0.2s ease,
              border-color 0.2s ease, box-shadow 0.2s ease;
          }
          .page-wrapper {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            min-height: calc(var(--vh, 1vh) * 100);
          }
          .main-container {
            flex: 1;
            overflow-x: hidden;
          }
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
