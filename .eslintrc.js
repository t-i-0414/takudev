module.exports = {
  root: true,
  extends: [
    'airbnb',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'prettier',
    'next',
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
        'newlines-between': 'never',
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
    {
      files: ['**/*.stories.[jt]s?(x)', './components/atoms/**/*.[jt]s?(x)'],
      rules: {
        'react/jsx-props-no-spreading': ['off'],
      },
    },
    {
      files: ['**/graphql_schema/**/__generated__/**/*.[jt]s?(x)'],
      rules: {
        'import/newline-after-import': ['off'],
        'no-use-before-define': ['off'],
        'no-unused-vars': ['off'],
        'no-shadow': ['off'],
        'import/order': ['off'],
      },
    },
  ],
};
