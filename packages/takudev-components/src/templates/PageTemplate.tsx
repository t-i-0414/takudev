import * as React from 'react';

import { ColorTheme } from '~/themes/ColorTheme';

export const PageTemplate: React.FC = ({ children }) => (
  <ColorTheme>{children}</ColorTheme>
);
