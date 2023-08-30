module.exports = {
  root: true,
  extends: [
    'airbnb',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'next',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'react'],
  rules: {
    'import/no-extraneous-dependencies': ['off'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': ['off'],
    'no-extra-semi': 'error',
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
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'react/react-in-jsx-scope': ['off'],
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': ['off'],
    'jest/no-hooks': [
      'error',
      {
        allow: ['beforeAll', 'beforeEach', 'afterAll', 'afterEach'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest/all', 'plugin:testing-library/react'],
    },
  ],
};
