import React, { useContext } from 'react';
import isEqual from 'react-fast-compare';

import { Logo } from '~/components/atoms';
import { useColor } from '~/hooks';
import { ColorThemeContext } from '~/themes';

type Props = {
  hrefToHome: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
};

export const PageHeader: React.FC<Props> = React.memo(({ hrefToHome }) => {
  const { colorMode } = useContext(ColorThemeContext);
  const { headerTextColor, headerColor } = useColor(colorMode);

  return (
    <>
      <header>
        <Logo color={headerTextColor} href={hrefToHome} />
      </header>
      <style jsx>
        {`
          header {
            height: 56px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: ${headerColor};
          }
        `}
      </style>
    </>
  );
}, isEqual);
PageHeader.displayName = 'PageHeader';
