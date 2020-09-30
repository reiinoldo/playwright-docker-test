import { root } from "./index";

const introSelector = ".App-header > p";
const linkSelector = ".App-link";
const buttonSelector = ".save-button";

export const getIntroText = async () => {
  const app = await root();
  return await app.$eval(introSelector, (el) => el.innerText);
};

export const getLinkText = async () => {
  const app = await root();
  return await app.$eval(linkSelector, (el) => el.innerText);
};

export const clicOnSaveButton = async () => {
  const app = await root();
  return await app.$eval(buttonSelector, (el) => el.click());
};
