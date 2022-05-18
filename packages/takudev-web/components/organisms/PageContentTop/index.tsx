import React from 'react';
import isEqual from 'react-fast-compare';

import { useColor } from '~/hooks';

export const PageContentTop: React.FC = React.memo(() => {
  const { textColor } = useColor();

  return (
    <>
      <h1>PageContentTop</h1>

      <style jsx>{`
        h1 {
          color: ${textColor};
        }
      `}</style>
    </>
  );
}, isEqual);
PageContentTop.displayName = 'PageContentTop';
