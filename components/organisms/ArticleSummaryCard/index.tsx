import { format } from 'date-fns';
import React, { useMemo } from 'react';
import isEqual from 'react-fast-compare';
import styles from './ArticleSummaryCard.module.scss';
import { TextTagList } from '~/components/molecules';

type Props = {
  slug: string;
  title: string;
  publishedAt: Date;
  tagList: string[];
};

export const ArticleSummaryCard: React.FC<Props> = React.memo(
  ({ slug, title, publishedAt, tagList }) => {
    const formattedDate = useMemo(
      () => format(publishedAt, 'MMM dd, yyyy'),
      [publishedAt],
    );

    const hasTagList = useMemo(() => tagList.length > 0, [tagList]);

    return (
      <a
        aria-label='article'
        href={`/articles/${slug}`}
        className={`${styles.container} container`}
      >
        <div className={styles['title-container']}>
          <p className={styles.title}>{title}</p>
        </div>

        <p className={styles['date-label']}>{formattedDate}</p>

        {hasTagList && (
          <div className={styles['tag-container']}>
            <TextTagList tagList={tagList} />
          </div>
        )}
      </a>
    );
  },
  isEqual,
);
ArticleSummaryCard.displayName = 'ArticleSummaryCard';
