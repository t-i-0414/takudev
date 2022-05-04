import React from 'react';
import isEqual from 'react-fast-compare';

import { Logo } from '~/components/atoms';
import { useColor } from '~/hooks';

type Props = {
  hrefToHome: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
};

export const PageHeader: React.FC<Props> = React.memo(({ hrefToHome }) => {
  const { headerTextColor, headerColor } = useColor();

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
