import * as React from 'react';
import { useContext } from 'react';

import { PageTemplate } from '~/templates';
import { ColorThemeContext } from '~/themes';

export const HomePage: React.FC = () => {
  const { colorMode, handleColorMode } = useContext(ColorThemeContext);

  return (
    <PageTemplate>
      <h1>Home Page</h1>
      <p>{colorMode}</p>
      <button type='button' onClick={handleColorMode}>
        Change color mode
      </button>
    </PageTemplate>
  );
};
HomePage.displayName = 'HomePage';
