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
    title: {
      control: 'text',
    },
    dateString: {
      control: 'select',
      options: [
        '2022-07-17',
        '2022-07-18',
        '2022-07-19',
        '2022-07-20',
        '2022-07-21',
        '2022-07-22',
        '2022-07-23',
      ],
    },
    tagList: {
      control: 'object',
      options: ['one', 'two', 'three', 'four', 'five'],
    },
    href: {
      control: 'text',
      table: { disable: true },
    },
  },
  args: {
    title: 'title',
    dateString: '2022-07-17',
    tagList: ['one', 'two', 'three', 'four', 'five'],
  },
} as ComponentMeta<typeof ArticleSummaryCard>;

export const Light: StoryType = {
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'div.container',
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
