const { register } = require('esbuild-register/dist/node');
register({
  target: 'node16',
});
const path = require('path');

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-postcss',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '../'),
      storybook: path.resolve(__dirname),
    };
    return config;
  },
  features: {
    interactionsDebugger: true,
  },
};