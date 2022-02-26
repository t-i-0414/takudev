import React, { useContext } from 'react';
import isEqual from 'react-fast-compare';

import { breakPointsMap } from '~/consts';
import { useColor } from '~/hooks';
import { ColorThemeContext } from '~/themes';
import { rem } from '~/utils';

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
          margin: 0;
          font-size: ${rem(10)};
        }

        @media (min-width: ${breakPointsMap.sm}px) {
          p {
            font-size: ${rem(20)};
          }
        }

        @media (min-width: ${breakPointsMap.md}px) {
          p {
            font-size: ${rem(40)};
          }
        }

        @media (min-width: ${breakPointsMap.lg}px) {
          p {
            font-size: ${rem(60)};
          }
        }

        @media (min-width: ${breakPointsMap.xl}px) {
          p {
            font-size: ${rem(80)};
          }
        }

        @media (min-width: ${breakPointsMap.xxl}px) {
          p {
            font-size: ${rem(100)};
          }
        }
      `}</style>
    </>
  );
}, isEqual);
Typography.displayName = 'Typography';
