import React from 'react';
import isEqual from 'react-fast-compare';
import { ArticleSummaryCard, ProfileCard } from '~/components/organisms';
import styles from './HomePageContent.module.scss';

type ArticleSummary = React.ComponentPropsWithoutRef<typeof ArticleSummaryCard>;

const articleSummaryListMock: ArticleSummary[] = [
  {
    title: 'title1',
    dateString: '2022-07-17',
    tagList: ['tag1', 'tag2'],
    href: '#',
  },
  {
    title: 'title2',
    dateString: '2022-07-18',
    tagList: ['tag1', 'tag2'],
    href: '#',
  },
  {
    title: 'title3',
    dateString: '2022-07-19',
    tagList: ['tag1', 'tag2'],
    href: '#',
  },
  {
    title: 'title4',
    dateString: '2022-07-20',
    tagList: ['tag1', 'tag2'],
    href: '#',
  },
  {
    title: 'title5',
    dateString: '2022-07-21',
    tagList: ['tag1', 'tag2'],
    href: '#',
  },
  {
    title: 'title6',
    dateString: '2022-07-22',
    tagList: ['tag1', 'tag2'],
    href: '#',
  },
  {
    title: 'title7',
    dateString: '2022-07-23',
    tagList: ['tag1', 'tag2'],
    href: '#',
  },
  {
    title: 'title8',
    dateString: '2022-07-24',
    tagList: ['tag1', 'tag2'],
    href: '#',
  },
  {
    title: 'title9',
    dateString: '2022-07-25',
    tagList: ['tag1', 'tag2'],
    href: '#',
  },
  {
    title: 'title10',
    dateString: '2022-07-26',
    tagList: ['tag1', 'tag2'],
    href: '#',
  },
  {
    title: 'title11',
    dateString: '2022-07-27',
    tagList: ['tag1', 'tag2'],
    href: '#',
  },
];

export const HomePageContent: React.FC = React.memo(
  () => (
    <div className={styles.container}>
      <ProfileCard />

      <div className={styles['article-summary-card-container']}>
        {articleSummaryListMock.map(({ title, dateString, tagList, href }) => (
          <ArticleSummaryCard
            key={dateString}
            title={title}
            dateString={dateString}
            tagList={tagList}
            href={href}
          />
        ))}
      </div>
    </div>
  ),
  isEqual,
);
HomePageContent.displayName = 'HomePageContent';
