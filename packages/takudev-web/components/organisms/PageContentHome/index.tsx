import React from 'react';
import isEqual from 'react-fast-compare';

import { ProfileCard } from '../ProfileCard';

import styles from './PageContentHome.module.scss';

export const PageContentHome: React.FC = React.memo(
  () => (
    <div className={styles['profile-card-container']}>
      <ProfileCard />
    </div>
  ),
  isEqual,
);
PageContentHome.displayName = 'PageContentHome';
