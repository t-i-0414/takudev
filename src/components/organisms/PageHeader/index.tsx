import React from 'react';
import isEqual from 'react-fast-compare';

import { PageHeaderView } from './PageHeaderView';

import { hrefMap } from '~/consts';

export const PageHeader = React.memo(
  () => <PageHeaderView hrefToHome={hrefMap.home} />,
  isEqual,
);
PageHeader.displayName = 'PageHeader';
