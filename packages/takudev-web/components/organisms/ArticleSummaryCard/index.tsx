import { format } from 'date-fns';
import React, { useMemo } from 'react';
import { TextTagList } from '~/components/molecules';
import { isInvalidDate } from '~/utils';
import styles from './ArticleSummaryCard.module.scss';

type Props = {
  title: string;
  dateString: string;
  tagList: string[];
  href: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
};

export const ArticleSummaryCard: React.FC<Props> = ({
  title,
  dateString,
  tagList,
  href,
}) => {
  const date = useMemo(() => {
    const candidate = new Date(dateString);

    if (isInvalidDate(candidate)) {
      return new Date();
    }

    return candidate;
  }, [dateString]);

  const formattedDate = useMemo(() => format(date, 'MMM dd, yyyy'), [date]);

  const hasTagList = useMemo(() => tagList.length > 0, [tagList]);

  return (
    <a aria-label='article' href={href} className={`${styles.container} logo`}>
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
};
