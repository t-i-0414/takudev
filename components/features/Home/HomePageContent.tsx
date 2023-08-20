import React from 'react';
import isEqual from 'react-fast-compare';
import styles from './HomePageContent.module.scss';
import { ArticleSummaryCard, ProfileCard } from '~/components/organisms';

type ArticleSummary = React.ComponentPropsWithoutRef<typeof ArticleSummaryCard>;

type Props = {
  articleSummaryList: ArticleSummary[];
};

export const HomePageContent: React.FC<Props> = React.memo(
  ({ articleSummaryList }) => (
    <div className={styles.container}>
      <ProfileCard />

      <div className={styles['article-summary-card-container']}>
        {articleSummaryList
          .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
          .map(({ slug, title, publishedAt, tagList }) => (
            <ArticleSummaryCard
              key={slug}
              slug={slug}
              title={title}
              publishedAt={publishedAt}
              tagList={tagList}
            />
          ))}
      </div>
    </div>
  ),
  isEqual,
);
HomePageContent.displayName = 'HomePageContent';

export default HomePageContent;
