// jest-preset.js
module.exports = {
    // Add any necessary configuration options
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx', 'json', 'node'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // For TypeScript files
    },
  };
  