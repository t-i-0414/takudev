module.exports = {
  extends: [
    './base.js',
    'plugin:react/recommended',
    'airbnb/hooks',
    'plugin:storybook/recommended',
    'prettier',
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
      files: ['**/*.stories.[jt]s?(x)', './components/atoms/**/*.[jt]s?(x)'],
      rules: {
        'react/jsx-props-no-spreading': ['off'],
      },
    },
  ],
};
