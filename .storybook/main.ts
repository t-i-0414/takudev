import type { StorybookConfig } from '@storybook/nextjs';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async config => {
    // @ts-expect-error
    config.resolve.alias = {
      // @ts-expect-error
      ...config.resolve.alias,
      '~': resolve(__dirname, '../'),
    };
    return config;
  },
};
export default config;
