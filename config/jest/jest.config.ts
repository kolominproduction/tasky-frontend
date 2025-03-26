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
        publicPath: '<rootDir>/reports/jest',
        filename: 'report.html',
        openReport: false,
        inlineSource: true,
      },
    ],
  ],
};

export default config;
