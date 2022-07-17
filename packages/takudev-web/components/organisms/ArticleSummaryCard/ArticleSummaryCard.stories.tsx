import React from 'react';
import { ArticleSummaryCard } from '.';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

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

const Template: ComponentStory<typeof ArticleSummaryCard> = args => (
  <div style={{ display: 'flex', padding: '16px', width: '100%' }}>
    <ArticleSummaryCard {...args} />
  </div>
);

export const Light = Template.bind({});
Light.decorators = [
  (Story, context) => (
    <LightThemeTemplate>
      <Story {...context.args} />
    </LightThemeTemplate>
  ),
];
Light.parameters = {
  screenshot: {
    variants: {
      hovered: {
        hover: 'a.icon',
      },
    },
  },
};

export const Dark = Template.bind({});
Dark.decorators = [
  (Story, context) => (
    <DarkThemeTemplate>
      <Story {...context.args} />
    </DarkThemeTemplate>
  ),
];
Dark.parameters = {
  screenshot: {
    variants: {
      hovered: {
        hover: 'a.icon',
      },
    },
  },
};
