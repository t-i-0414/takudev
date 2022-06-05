import React from 'react';
import isEqual from 'react-fast-compare';

import styles from './PageContentHome.module.scss';

export const PageContentHome: React.FC = React.memo(
  () => <h1 className={styles.h1}>PageContentHome</h1>,
  isEqual,
);
PageContentHome.displayName = 'PageContentHome';
