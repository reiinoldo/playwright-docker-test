module.exports = {
  globals: {
    baseURL: "http://localhost:3001",
  },
  testMatch: ["**/specs/*.js"],
  transform: {
    "\\.js$": "react-scripts/config/jest/babelTransform",
  },
  verbose: true,
  testTimeout: 10000,
};
