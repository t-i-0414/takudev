import React from 'react';
import { TextTag } from '~/components/atoms';
import styles from './TextTagList.module.scss';

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
