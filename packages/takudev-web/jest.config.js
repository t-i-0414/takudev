module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.jest.json',
    },
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
  },
};
