import React, { useContext } from 'react';
import isEqual from 'react-fast-compare';

import { useColor } from '~/hooks';
import { ColorThemeContext } from '~/themes';

type Props = {
  color?: string;
  href: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
};

export const Logo: React.FC<Props> = React.memo(({ color, href }) => {
  const { colorMode } = useContext(ColorThemeContext);
  const { textColor } = useColor(colorMode);
  const logoColor = color || textColor;

  return (
    <>
      <a href={href} className='logo'>
        Taku.dev
      </a>
      <style jsx>
        {`
          .logo {
            display: block;
            width: fit-content;
            font-family: futura-pt, system-ui, -apple-system, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji';
            font-size: 28px;
            font-weight: 700;
            font-style: italic;
            text-decoration: none;
            color: ${logoColor};
          }
          .logo:hover {
            opacity: 0.8;
          }
          .logo:active {
            opacity: 0.6;
          }
        `}
      </style>
    </>
  );
}, isEqual);
Logo.displayName = 'Logo';
