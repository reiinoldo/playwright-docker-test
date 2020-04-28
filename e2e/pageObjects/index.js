import { browserType, launchConfig, contextConfig } from "../playwright.config";

let browser, context, page;

export const load = async () => {
  browser = await browserType.launch(launchConfig);
  context = await browser.newContext(contextConfig);
  page = await context.newPage(baseURL);
};

export const close = async () => await browser.close();

export const getTitle = async () => await page.title();
