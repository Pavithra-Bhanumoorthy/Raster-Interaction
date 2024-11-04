// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  preset: './jest-preset.cjs', // Ensure this points to your preset
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/__tests__/**/*.(spec|test).[jt]s?(x)'],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'jest-css-modules', // Map CSS imports to jest-css-modules
  },
};

export default config;
