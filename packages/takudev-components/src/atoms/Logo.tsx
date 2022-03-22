import React, { useContext } from 'react';
import isEqual from 'react-fast-compare';

import { useColor } from '~/hooks';
import { ColorThemeContext } from '~/themes';

type Props = {
  color?: string;
  href: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
} & React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const Logo: React.FC<Props> = React.memo(({ color, href, ...rest }) => {
  const { colorMode } = useContext(ColorThemeContext);
  const { textColor } = useColor(colorMode);
  const logoColor = color || textColor;

  return (
    <>
      <a href={href} className='logo' {...rest}>
        Taku.dev
      </a>
      <style jsx>
        {`
          .logo {
            color: ${logoColor};
            display: block;
            font-family: futura-pt, system-ui, -apple-system, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji';
            font-size: 28px;
            font-style: italic;
            font-weight: 700;
            text-decoration: none;
            width: fit-content;
          }
          .logo:hover {
            opacity: 0.8;
          }
          .logo:focus-visible {
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
