module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@takudev/eslint-config-custom`
  extends: ['@takudev/eslint-config-custom/base'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
