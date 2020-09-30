export default class DialogHandler {
  dialog;

  constructor(aPage) {
    this.page = aPage;
    this.dialog = {};
    this.page.addListener("dialog", (dialog) => this.onDialog(dialog));
  }

  onDialog(dialog) {
    this.dialog = dialog;
  }

  async appeared() {
    await this.page.waitForEvent("dialog");
  }

  async dismiss() {
    await this.dialog.dismiss();
  }

  async accept() {
    await this.dialog.accept();
  }
}
