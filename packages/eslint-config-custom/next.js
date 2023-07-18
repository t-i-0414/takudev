module.exports = {
  extends: ['next', 'turbo', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  overrides: [
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
