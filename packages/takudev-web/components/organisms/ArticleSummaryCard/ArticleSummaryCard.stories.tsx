import React from 'react';
import { ArticleSummaryCard } from '.';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

type StoryType = ComponentStoryObj<typeof ArticleSummaryCard>;

export default {
  title: 'Organisms/ArticleSummaryCard',
  component: ArticleSummaryCard,
  argTypes: {
    slug: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    publishedAt: {
      control: 'date',
    },
    tagList: {
      control: 'object',
      options: ['one', 'two', 'three', 'four', 'five'],
    },
  },
  args: {
    slug: 'slug',
    title: 'title',
    publishedAt: new Date('2022-07-17'),
    tagList: ['one', 'two', 'three', 'four', 'five'],
  },
} as ComponentMeta<typeof ArticleSummaryCard>;

export const Light: StoryType = {
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.container',
        },
      },
    },
  },
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <div style={{ display: 'flex', padding: '16px', width: '100%' }}>
          <Story {...context.args} />
        </div>
      </LightThemeTemplate>
    ),
  ],
};

export const Dark: StoryType = {
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.container',
        },
      },
    },
  },
  decorators: [
    (Story, context) => (
      <DarkThemeTemplate>
        <div style={{ display: 'flex', padding: '16px', width: '100%' }}>
          <Story {...context.args} />
        </div>
      </DarkThemeTemplate>
    ),
  ],
};
