import React from 'react';
import isEqual from 'react-fast-compare';

import { hrefMap } from '~/consts';

import { PageHeaderView } from './PageHeaderView';

export const PageHeader = React.memo(
  () => <PageHeaderView hrefToHome={hrefMap.home} />,
  isEqual,
);
PageHeader.displayName = 'PageHeader';
