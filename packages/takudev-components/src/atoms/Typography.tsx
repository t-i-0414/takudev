import React, { useContext } from 'react';

import { useColor } from '~/hooks';
import { ColorThemeContext } from '~/themes';

type Props = {
  children: React.ReactNode;
};
export const Typography: React.FC<Props> = React.memo(({ children }: Props) => {
  const { colorMode } = useContext(ColorThemeContext);
  const { textColor } = useColor(colorMode);

  return (
    <>
      <p>{children}</p>
      <style jsx>{`
        p {
          color: ${textColor};
        }
      `}</style>
    </>
  );
});
Typography.displayName = 'Typography';
