module.exports = {
  setupFilesAfterEnv: ['./rtl.setup.js'],
  collectCoverageFrom: ['src/**/*.js'],
  moduleDirectories: [
    'node_modules',
    'src/utils/jest',
  ],
  coverageThreshold: {
      global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
      },
  },
  // transform: {
  //     '^.+\\.jsx?$': 'babel-jest',
  // },
}
