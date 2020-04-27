import { load, close, getTitle } from "../pageObjects";

describe("Google", () => {
  beforeEach(async () => {
    await load();
  });

  afterEach(async () => {
    await close();
  });

  it("should be titled 'Google'", async () => {
    expect(await getTitle()).toBe("Google");
  });
});
