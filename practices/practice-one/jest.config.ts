export default {
  preset: 'ts-jest',
  clearMocks: true,
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '/^(.*)$/': '<rootDir>/src/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@constants/(.*)': '<rootDir>/src/constants/$1',
    '@interface/(.*)$': '<rootDir>/src/interface/$1',
    '@helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@hooks$': '<rootDir>/src/hooks',
  },
  testPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/', '<rootDir>/dist/'],
  transform: {
    '.+\\.(css|less|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub',
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverageFrom: [
    '**/src/**/*.{js,ts,tsx}',
    '!**/*.test.{js,ts,tsx}',
    '!**/*.stories.{js,ts,tsx}',
    '!src/component/**/__test__/__snapshots__/*.test.{js,ts,tsx}.snap',
  ],
};
