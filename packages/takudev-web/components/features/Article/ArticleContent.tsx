import { format } from 'date-fns';
import React, { useMemo } from 'react';
import isEqual from 'react-fast-compare';
import ReactMarkdown from 'react-markdown';
import { TextTagList } from '~/components/molecules';
import { ProfileCard } from '~/components/organisms';
import styles from './ArticleContent.module.scss';

type Props = {
  title: string;
  tagList: string[];
  content: string;
  publishedAt: Date;
};

export const ArticleContent: React.FC<Props> = React.memo(
  ({ title, publishedAt, tagList, content }) => {
    const formattedDate = useMemo(
      () => format(publishedAt, 'MMM dd, yyyy'),
      [publishedAt],
    );

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles['profile-card-container']}>
            <ProfileCard />
          </div>

          <div className={styles['date-container']}>
            <p className={styles.date}>{formattedDate}</p>
          </div>

          <div className={styles['heading-container']}>
            <h1 className={styles.heading}>{title}</h1>
          </div>

          <div className={styles['tag-list-container']}>
            <TextTagList tagList={[...tagList, ...tagList]} />
          </div>

          <div className={styles['markdown-container']}>
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </div>
    );
  },
  isEqual,
);
ArticleContent.displayName = 'ArticleContent';
