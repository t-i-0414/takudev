module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
    },
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
  },
};
