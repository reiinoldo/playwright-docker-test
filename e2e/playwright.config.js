import { firefox } from "playwright";

module.exports = {
  browserType: firefox,
  launchConfig: {
    headless: true,
  },
};
