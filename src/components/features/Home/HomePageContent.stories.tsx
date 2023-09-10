import { ComponentProps } from 'react';

import { HomePageContent } from './HomePageContent';

import type { StoryObj, Meta } from '@storybook/react';

type StoryType = StoryObj<typeof HomePageContent>;

const articleSummaryListMock: ComponentProps<
  typeof HomePageContent
>['articleSummaryList'] = [
  {
    title: 'title1',
    publishedAt: new Date('2022-07-17'),
    tagList: ['tag1', 'tag2'],
    slug: '#',
  },
  {
    title: 'title2',
    publishedAt: new Date('2022-07-18'),
    tagList: ['tag1', 'tag2'],
    slug: '#',
  },
  {
    title: 'title3',
    publishedAt: new Date('2022-07-19'),
    tagList: ['tag1', 'tag2'],
    slug: '#',
  },
  {
    title: 'title4',
    publishedAt: new Date('2022-07-20'),
    tagList: ['tag1', 'tag2'],
    slug: '#',
  },
  {
    title: 'title5',
    publishedAt: new Date('2022-07-21'),
    tagList: ['tag1', 'tag2'],
    slug: '#',
  },
  {
    title: 'title6',
    publishedAt: new Date('2022-07-22'),
    tagList: ['tag1', 'tag2'],
    slug: '#',
  },
  {
    title: 'title7',
    publishedAt: new Date('2022-07-23'),
    tagList: ['tag1', 'tag2'],
    slug: '#',
  },
  {
    title: 'title8',
    publishedAt: new Date('2022-07-24'),
    tagList: ['tag1', 'tag2'],
    slug: '#',
  },
  {
    title: 'title9',
    publishedAt: new Date('2022-07-25'),
    tagList: ['tag1', 'tag2'],
    slug: '#',
  },
  {
    title: 'title10',
    publishedAt: new Date('2022-07-26'),
    tagList: ['tag1', 'tag2'],
    slug: '#',
  },
  {
    title: 'title11',
    publishedAt: new Date('2022-07-27'),
    tagList: ['tag1', 'tag2'],
    slug: '#',
  },
];

export default {
  title: 'Features/Home/HomePageContent',
  component: HomePageContent,
  args: { articleSummaryList: articleSummaryListMock },
} as Meta<typeof HomePageContent>;

export const Default: StoryType = {};
