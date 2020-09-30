import { browserType, launchConfig, contextConfig } from "../playwright.config";
import DialogHandler from "./dialog";

const rootSelector = "#root";
let browser, context, page, dialog;

export const root = async () => await page.$(rootSelector);

export const load = async () => {
  browser = await browserType.launch(launchConfig);
  context = await browser.newContext(contextConfig);
  page = await context.newPage();
  await page.goto(baseURL);
  dialog = new DialogHandler(page);
};

export const reload = async () => await page.reload();

export const close = async () => await page.close({ runBeforeUnload: true });

export const closeBrowser = async () => await browser.close();

export const getTitle = async () => await page.title();

export const dialogAppers = async () => await dialog.appeared();

export const dismissDialog = async () => await dialog.dismiss();
