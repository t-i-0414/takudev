import React from 'react';

import { HomePage } from './HomePage';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  argTypes: {
    hrefToHome: {
      table: {
        disable: true,
      },
    },
    initialColorMode: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = args => (
  <HomePage {...args} />
);

export const Light: ComponentStory<typeof HomePage> = Template.bind({});

export const Dark: ComponentStory<typeof HomePage> = Template.bind({});
