import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Key, browser, protractor } from "protractor";
import { commonPAgeXpath } from "../pages/commonPage";
import { Base } from "../pages/BaseFunctions";
import { serviceplan } from "../pages/goalpage";
import { unefied } from "../pages/unefieddpage";
var commonpage = new commonPAgeXpath();
var goalpage = new serviceplan();
setDefaultTimeout(600000);
browser.manage().timeouts().implicitlyWait(10000);
browser.waitForAngularEnabled(false);
const obj = new Base();
Then('click on Members Tab', async function (dataTable) {
    const data = dataTable.hashes();
    const data1 = data[0];
    const obj = new Base();
    await obj.WaitforElementClickable(await obj.replaceXpath(commonpage.tab, data1.TabName));
    await browser.actions().mouseMove(await obj.replaceXpath(commonpage.tab, data1.TabName)).doubleClick(await obj.replaceXpath(commonpage.tab, data1.TabName)).perform();
    await obj.clickElement(await obj.replaceXpath(commonpage.tab, data1.TabName));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('click on Add Goal', async function () {
    await obj.clickElement(goalpage.addGoalbtn);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('Enter data on goals page', async function (dataTable) {
    var data = dataTable.rowsHash();
    await browser.sleep(1000);
    await obj.clickElement(await obj.replaceXpath(goalpage.matselectcontains, "Category"));
    await obj.clickElement(await obj.replaceXpath(commonpage.buttonspan, data.CATEGORY));
    await obj.clickElement(await obj.replaceXpath(commonpage.divcontains, data.OBJECTIVE));
    await obj.setInputField(await obj.replaceXpath(commonpage.textarea, "Comments"), data.COMMENTS);
    await obj.setInputField(await obj.replaceXpath(commonpage.inputdataplaceholder, "Identified Resources"), data.IDENTIFIED_RESOURCES);
    await obj.clickElement(await obj.replaceXpath(commonpage.inputdataplaceholder, "Identified Date"));
    await obj.clickElement(commonpage.currentDate);
    await obj.clickElement(await obj.replaceXpath(commonpage.inputdataplaceholder, "Target Date"));
    await obj.clickElement(await obj.replaceXpath(commonpage.datecell, "25"));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('click on Add button', async function () {
    await obj.clickElement(goalpage.popupaddbtn);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});