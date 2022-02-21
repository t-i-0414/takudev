module.exports = {
  extends: ['../../.eslintrc.js', 'plugin:react/recommended', 'airbnb/hooks'],
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
    'react/jsx-props-no-spreading': ['error', { explicitSpread: 'ignore' }],
    'react/require-default-props': [
      'error',
      { ignoreFunctionalComponents: true },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest/all', 'plugin:testing-library/react'],
    },
  ],
};
