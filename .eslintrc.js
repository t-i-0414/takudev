module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@takudev/eslint-config-custom`
  extends: ['@takudev/eslint-config-custom'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
