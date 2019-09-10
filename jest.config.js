module.exports = {
  verbose: true,
  setupFiles: ['<rootDir>/__tests__/setupTest.js'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  coveragePathIgnorePatterns: [
    '/node_module/',
  ],
  testPathIgnorePatterns: [
    '/__tests__/setupTest.js',
    '/_tests__/axios.js',
  ]
};