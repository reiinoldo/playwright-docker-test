import { clicOnSaveButton } from "../pageObjects/app";
import {
  load,
  close,
  closeBrowser,
  dialogAppers,
  dismissDialog,
} from "../pageObjects/index";

describe("React App", () => {
  beforeEach(async () => {
    await load();
  });

  afterEach(async () => {
    await closeBrowser();
  });

  it("Should show the unsaved changes dialog when tries to close the page without saving the changes", async () => {
    expect(await clicOnSaveButton()); // save
    expect(await clicOnSaveButton()); // unsaved changes
    await close();
    expect(await dialogAppers());
    expect(await dismissDialog());
    expect(await clicOnSaveButton()); // save to close
  });
});
