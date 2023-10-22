import React from 'react';
import styles from './TextTag.module.scss';

type Props = {
  text: string;
};

export const TextTag: React.FC<Props> = ({ text }) => (
  <div className={styles.container}>
    <p className={styles.text}>{`# ${text}`}</p>
  </div>
);
