import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { ElementFinder, Key, browser, by, element, protractor } from "protractor";
import { commonPAgeXpath } from "../pages/commonPage";
import { Base } from "../pages/BaseFunctions";
import { serviceplan } from "../pages/goalpage";
import { unefied } from "../pages/unefieddpage";
import { consultpage } from "../pages/consultpage";
import { replaceXpath } from "../pages/assertion";
var commonpage = new commonPAgeXpath();
var goalpage = new serviceplan();
setDefaultTimeout(600000);
browser.manage().timeouts().implicitlyWait(10000);
browser.waitForAngularEnabled(false);
const obj = new Base();
var consult = new consultpage();

Then('change url of program cheetsheat', async function () {
  await browser.sleep(1000);
  await element(by.xpath(commonpage.tab.replace('$data$', "Overview"))).click();
  const url: any = await browser.getCurrentUrl();
  const lastIndex = url.lastIndexOf('/');
  const newUrl = url.substring(0, lastIndex) + '/program-cheatsheet';
  console.log(newUrl);
  await browser.get(newUrl);
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});
Then('Click on Change Status', async function () {
  await element(by.xpath(commonpage.buttonspan.replace('$data$', "Change Status"))).click();
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});

Then('Click on Status Container', async function (dataTable) {
  var data = dataTable.rowsHash();
  await element(by.xpath(consult.programstatus.replace('$data$', data.STATUS_NAME))).click();
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});
Then('Click on Add Consult', async function () {
  await element(by.xpath(commonpage.buttonspan.replace('$data$', "Add Consult"))).click();
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});
Then('Click On Save on Update Status Pop Up', async function () {
  await commonpage.popupsave.click();
  const presence: any = await element(by.xpath(commonpage.buttonspan.replace('$data$', "Close"))).isPresent();
  if (presence) {
    await element(by.xpath(commonpage.buttonspan.replace('$data$', "Close"))).click();
  }
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});
Then('enter data in update status pop up', async function (dataTable) {
  var data = dataTable.rowsHash();
  await obj.setInputField(element(by.xpath(commonpage.testarea2.replace('$data$', 'notes'))), data.NOTES);
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");

});
Then('select consult source_type', async function (dataTable) {
  var data = dataTable.rowsHash();
  let i = 0;
  while (i < 3) {
    await consult.matselect.click();
    await obj.WaitforElementPresence(consult.listbox);
    await element(by.xpath(consult.dropdownoption.replace('$data$', data.type))).click();
    i += 1;
  }
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");

});
Then('click on Add Diagnosis in Conults page', async function () {
  const presence: any = await consult.saved.isPresent();
  if (presence) {
    await element(by.xpath(commonpage.buttonspan.replace('$data$', "Add Diagnosis"))).click();
  }
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});

Then('Enter Data in Diagnosis Page', async function (dataTable) {
  const data1 = dataTable.hashes();
  const data = data1[0];
  await obj.setInputField(element(by.xpath(commonpage.inputFormcontrolname.replace('$data$', "query"))), data.Code);
  await element(by.xpath(consult.matoption.replace('$data$', data.Code))).click();
  await element(by.xpath(consult.matselectformcontrol.replace('$data$', "source_type"))).click();
  await element(by.xpath(commonpage.matoption.replace('$data$', data.source_type))).click();
  await element(by.xpath(consult.matselectformcontrol.replace('$data$', "diagnosis_type"))).click();
  await element(by.xpath(commonpage.matoption.replace('$data$', data.diagnosis_type))).click();
  await commonpage.save.click();
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});
Then('click on Add Measurement Plan', async function () {
  const presence: any = await consult.saved.isPresent();
  if (presence) {
    await element(by.xpath(commonpage.buttonspan.replace('$data$', " Add Measurement Plan"))).click();
  }
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});

Then('Enter data in Measurement Plan page', async function (dataTable) {
  var data = dataTable.rowsHash();
  await consult.ass.click();
  await element(by.xpath(commonpage.matoption.replace('$data$', data.ASSESSMENT))).click();
  await obj.setInputField(element(by.xpath(commonpage.testarea2.replace('$data$', "notes"))), data.NOTES);
  await commonpage.save.click();
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});
Then('Enter data in consults textbox', async function (dataTable) {
  const data: any[][] = dataTable.raw();
  await obj.setInputField(element(by.xpath(consult.text.replace('$data$', data[0][0]))), data[0][1])
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});
Then('Select acknowledge', async function () {
  await browser.actions().mouseMove(consult.checkbox).perform();
  await consult.checkbox.click();
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});

Then('take action for the consult', async function (dataTable) {
  await browser.sleep(4000);
  await consult.publishbtn.click();
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});
Then('verify data in Consults Page', async function (dataTable) {
  const data: any[][] = dataTable.raw();
  var datav = dataTable.rowsHash();
  const type: any = await element(by.xpath(commonpage.buttonspan.replace('$data$', datav.CONSULT_TYPE))).getText();
  obj.CompareValues("Consult Type:", type, datav.CONSULT_TYPE);
  const datecreated: any = await element(by.xpath(consult.verifydatecreated.replace('$data$', "Date Created:"))).getText();
  obj.CompareValues("Date:", datecreated, obj.getDateValue(datav.DATE_CREATED));
  const status: any = await element(by.xpath(commonpage.buttonspan.replace('$data$', datav.CONSULT_STATUS))).getText();
  obj.CompareValues("Status", status, datav.CONSULT_STATUS);
  for (let i = 3; i < data.length; i += 2) {
    const text: any = await element(by.xpath(consult.mverify.replace('$data$', data[i][1]))).getText();
    obj.CompareValues("Measurement plan verify", text, data[i + 1][1]);
  }
  obj.expect();
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});

Then('verify notes data in Consults Page', async function (dataTable) {
  const data: any[][] = dataTable.raw();
  for (let i = 0; i < data.length; i += 1) {
    obj.CompareValues("Notes data", await element(by.xpath(consult.notesverify.replace('$notes$', data[i][0]))).getText(), data[i][1]);
  }
  obj.expect();
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});


Then('verify Diagnosis Data', async function (dataTable) {
  const data = dataTable.rowsHash();
  obj.CompareValues("diagnosis status", await element(by.xpath(consult.diagnosisdataverify.replace('$diagnosis$', data.DIAGNOSIS).replace('$code$', data.DIAGNOSIS_CD).replace('$status$', data.DIAGNOSIS_STATUS))).getText(), data.DIAGNOSIS_STATUS);
  obj.expect();
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});
Then('verify consults column headings', async function (dataTable) {
  const data: any[][] = dataTable.raw();
  for (let i = 0; i < data.length; i += 1) {
    // let value: any = await element(by.xpath(consult.columnheading.replace('$data$', data[i][1]))));
    obj.CompareValues("column headings", await element(by.xpath(consult.columnheading.replace('$data$', data[i][1]))).getText(), data[i][1]);
  }
  obj.expect();
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});
Then('verify consults list page data', async function (dataTable) {
  const data: any[][] = dataTable.raw();
  var datav = dataTable.rowsHash();
  console.log(data.length);
  for (let i = 0; i < 2; i += 1) {
    // let value: any = await element(by.xpath(consult.columnsdata.replace('$data$', data[i][1]))));
    obj.CompareValues("columns data", await element(by.xpath(consult.columnsdata.replace('$data$', data[i][1]))).getText(), data[i][1]);
  }
  obj.CompareValues("care extender", await element(by.xpath(commonpage.divcontains.replace('$data$', data[2][1]))).getText(), data[2][1]);
  const date: any = obj.getDateValue(datav.created);
  console.log(date);
  const created: any = await consult.datecreated.getText();
  console.log(created);
  obj.CompareValues("date created", created, date);
  const submited: any = await consult.datesubmitted.getText();
  console.log(submited);
  obj.CompareValues("date submited", submited, date);
  obj.expect();
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});
Then('user mouse howers on consult list tab', async function (dataTable) {
  var data = dataTable.rowsHash();
  await browser.actions().mouseMove((element(by.xpath(consult.columnsdata.replace('$data$', data.Type))))).perform();
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});

Then('user verifies icons', async function (dataTable) {
  const data: any[][] = dataTable.raw();
  for (let i = 0; i < data.length; i += 1) {
    let presence: any = element(by.xpath(commonpage.uicicon.replace('$data$', data[i][0]))).isPresent();
    if (presence) {
      presence = "Yes";
    }
    else {
      presence = "No"
    }
    obj.CompareValues("icon verify", presence, data[i][1]);
  }
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});
Then('click on Edit icon', async function (dataTable) {
  var data = dataTable.rowsHash();
  await element(by.xpath(consult.clickicon.replace('$data$', data.icon))).click();
  const screenShot = await browser.takeScreenshot();
  this.attach(screenShot, "image/png");
});

