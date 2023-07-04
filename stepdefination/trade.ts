
import { Then, setDefaultTimeout } from "@cucumber/cucumber"
import { ElementFinder, ExpectedConditions, browser, by, element } from "protractor";
import { trade } from "../pages/commonpage";
import { Base } from "../pages/BaseFunctions";
var page = new trade();
const obj = new Base();
setDefaultTimeout(600000);
browser.manage().timeouts().implicitlyWait(10000);
browser.waitForAngularEnabled(false);
Then('user navogates to url', async function (dataTable) {
    var data = dataTable.rowsHash();
    await browser.get(data.url);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});


Then('user enters username and password', async function (dataTable) {
    var data = dataTable.rowsHash();
    await obj.replaceXpath(page.inputtype, "text").sendKeys(data.username);
    await obj.replaceXpath(page.inputtype, "password").sendKeys(data.password);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('user clicks on submit', async function () {
    await page.submit.click();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('user enters App code', async function (dataTable) {
    var data = dataTable.rowsHash();
    await obj.replaceXpath(page.inputtype, "text").sendKeys(data.code); 
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('user hovers mouse on trade tab', async function (dataTable) {  
    var data = dataTable.rowsHash();
    await browser.actions().mouseMove(obj.replaceXpath(page.tradetab,data.tab)).perform();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  Then('user clicks on more', async function () {
    await page.more.click();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });


  Then('user selects {string}', async function (string) {
    await obj.replaceXpath(page.spantext,string).click();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });

  Then('user search', async function () {
    await obj.replaceXpath(page.inputtype, "text").sendKeys("nifty");
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });

