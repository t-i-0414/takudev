import React from 'react';
import isEqual from 'react-fast-compare';

import { ArticleSummaryCard, ProfileCard } from '~/components/organisms';

import { css } from 'styled-system/css';

type ArticleSummary = React.ComponentPropsWithoutRef<typeof ArticleSummaryCard>;

type Props = {
  articleSummaryList: ArticleSummary[];
};

export const HomePageContent: React.FC<Props> = React.memo(
  ({ articleSummaryList }) => (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px 16px 80px',
      })}
    >
      <ProfileCard />

      <div
        className={css({
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1040px',
          marginTop: '32px',
        })}
      >
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
