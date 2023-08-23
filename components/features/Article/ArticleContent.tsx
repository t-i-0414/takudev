import { format } from 'date-fns';
import React, { useMemo } from 'react';
import isEqual from 'react-fast-compare';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import styles from './ArticleContent.module.scss';
import { CodeBlock } from './CodeBlock';
import { ImageBlock } from './ImageBlock';
import { LinkBlock } from './LinkBlock';
import { TableBlock } from './TableBlock';

import { TextTagList } from '~/components/molecules';
import { ProfileCard } from '~/components/organisms';

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
            <TextTagList tagList={tagList} />
          </div>

          <div className={styles['markdown-container']}>
            <ReactMarkdown
              components={{
                code: CodeBlock,
                img: ImageBlock,
                table: TableBlock,
                a: LinkBlock,
              }}
              remarkPlugins={[remarkGfm]}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    );
  },
  isEqual,
);
ArticleContent.displayName = 'ArticleContent';

export default ArticleContent;
