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
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
}