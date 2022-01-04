module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:promise/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-extra-parens': ['error', 'all'],
    'no-extra-semi': 'error',
    'no-duplicate-imports': 'error',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '_',
        args: 'all',
        ignoreRestSiblings: true,
        argsIgnorePattern: '_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '_',
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'sort-imports': 'error',
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: [
        'plugin:testing-library/react',
        'plugin:jest/all',
        'plugin:cypress/recommended',
      ],
    },
  ],
};
