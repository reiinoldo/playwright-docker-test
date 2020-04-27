module.exports = {
  globals: {
    baseURL: "https://google.com",
  },
  testMatch: ["**/specs/*.js"],
  transform: {
    "\\.js$": "react-scripts/config/jest/babelTransform",
  },
  verbose: true,
};
