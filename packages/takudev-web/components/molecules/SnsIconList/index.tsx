import React from 'react';
import isEqual from 'react-fast-compare';
import { SnsIcon } from '../../atoms';
import styles from './SnsIconList.module.scss';

type Props = {
  colorName?: React.ComponentPropsWithoutRef<typeof SnsIcon>['colorName'];
};

export const SnsIconList: React.FC<Props> = React.memo(
  ({ colorName: color }) => (
    <div className={styles.container}>
      <SnsIcon type='github' colorName={color} />
      <SnsIcon type='twitter' colorName={color} />
      <SnsIcon type='facebook' colorName={color} />
      <SnsIcon type='linkedin' colorName={color} />
      <SnsIcon type='rss' colorName={color} />
    </div>
  ),
  isEqual,
);
SnsIconList.displayName = 'SnsIconList';
