/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleDirectories: ['node_modules', '<rootDir>/node_modules', '.'],
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
      '^src(.*)$': '<rootDir>/src$1',
  },
};
