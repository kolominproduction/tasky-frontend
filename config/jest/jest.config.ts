import type { Config } from 'jest';
import path from 'path';

const config: Config = {
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>config/jest/setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './reports',
        filename: 'jest-report.html',
        openReport: false,
      },
    ],
  ],
};

export default config;
