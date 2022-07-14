import React from 'react';
import isEqual from 'react-fast-compare';

import { PageFooterView } from './PageFooterView';

export const PageFooter: React.FC = React.memo(
  () => <PageFooterView />,
  isEqual,
);
PageFooter.displayName = 'PageFooter';
