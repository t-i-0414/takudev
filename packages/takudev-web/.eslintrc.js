module.exports = {
  extends: [
    '../../.eslintrc.js',
    'plugin:react/recommended',
    'airbnb/hooks',
    'plugin:@next/next/recommended',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
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
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest/all', 'plugin:testing-library/react'],
    },
    {
      files: [
        './pages/_app.tsx',
        '**/*.stories.[jt]s?(x)',
        './components/atoms/**/*.[jt]s?(x)',
      ],
      rules: {
        'react/jsx-props-no-spreading': ['off'],
      },
    },
    {
      files: ['**/graphql/**/__generated__/**/*.[jt]s?(x)'],
      rules: {
        'import/newline-after-import': ['off'],
        'no-use-before-define': ['off'],
        'no-unused-vars': ['off'],
      },
    },
  ],
};
