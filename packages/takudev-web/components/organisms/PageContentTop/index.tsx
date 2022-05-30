import React from 'react';
import isEqual from 'react-fast-compare';

import styles from './PageContentTop.module.scss';

export const PageContentTop: React.FC = React.memo(
  () => <h1 className={styles.h1}>PageContentTop</h1>,
  isEqual,
);
PageContentTop.displayName = 'PageContentTop';
