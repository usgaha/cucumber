import { After, AfterAll, Before, BeforeAll, BeforeStep, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { browser } from "protractor";
After(async function (scenario) {
  if (scenario?.result?.status == Status.FAILED || scenario?.result?.status == Status.PASSED) {
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, 'image/png');
  }
});
BeforeStep(async function () {
  setDefaultTimeout(1 * 60000);
  await browser.manage().timeouts().implicitlyWait(1 * 60000);
  await browser.waitForAngularEnabled(false);
});