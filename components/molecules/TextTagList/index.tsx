import React from 'react';

import styles from './TextTagList.module.scss';

import { TextTag } from '~/components/atoms';

type Props = {
  tagList: string[];
};

export const TextTagList: React.FC<Props> = ({ tagList }) => (
  <div className={styles.container}>
    {tagList.map(tag => (
      <TextTag key={tag} text={tag} />
    ))}
  </div>
);
