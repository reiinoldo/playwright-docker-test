This project is to Dockerize a test project with Playwright. I'm following https://github.com/KyleADay/react-app-playwright which provides one way to add Playwright to a create-react-app generated app.

Open a new terminal and run –

```bash
$ git clone https://github.com/reiinoldo/playwright-docker-test
$ cd playwright-docker-test
$ docker-compose up
```

It will create an Docker image and run it, performing a test that will open google.com page and check if the title page is Google.
The Docker file follow the [Running Playwright in Docker](https://github.com/microsoft/playwright/tree/master/docs/docker) documentation.

In order to set browser any other browser see the `playwright.config.js` file with the launch and context options:

```js
// e2e/playwright.config.js

import { firefox } from "playwright";

module.exports = {
  browserType: firefox,
  launchConfig: {
    headless: true,
  },
};
```
