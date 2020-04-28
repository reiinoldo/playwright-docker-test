import { chromium } from "playwright";

module.exports = {
  browserType: chromium,
  launchConfig: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
};
