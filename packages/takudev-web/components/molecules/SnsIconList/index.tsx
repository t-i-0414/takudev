import React from 'react';
import isEqual from 'react-fast-compare';
import { SnsIcon } from '../../atoms';
import styles from './SnsIconList.module.scss';

type Props = {
  color?: React.ComponentPropsWithoutRef<typeof SnsIcon>['color'];
};

export const SnsIconList: React.FC<Props> = React.memo(
  ({ color }) => (
    <div className={styles.container}>
      <SnsIcon type='github' color={color} />
      <SnsIcon type='twitter' color={color} />
      <SnsIcon type='facebook' color={color} />
      <SnsIcon type='linkedin' color={color} />
      <SnsIcon type='rss' color={color} />
    </div>
  ),
  isEqual,
);
SnsIconList.displayName = 'SnsIconList';
