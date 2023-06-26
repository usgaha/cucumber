import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { ElementFinder, ExpectedConditions, browser, by, element } from "protractor";
import { Base } from "../pages/BaseFunctions";
import { commonPAgeXpath } from "../pages/commonPage";
import { consultpage } from "../pages/consultpage";
import { serviceplan } from "../pages/goalpage";
import { databasewithparm, namevalue } from "../pages/dbclass";
var commonpage = new commonPAgeXpath();
var goalpage = new serviceplan();
setDefaultTimeout(600000);
browser.manage().timeouts().implicitlyWait(60000);
browser.waitForAngularEnabled(false);
const obj = new Base();
var consult = new consultpage();
let name: any;
let emrid: any;
let address: any;
let dob: any;
Then('verify programs tab text', async function (dataTable) {
    var data = dataTable.rowsHash();
    obj.CompareValues("Program tab text", await element(by.xpath(consult.buttontext.replace('$data$', data.text))).getText(), data.text);         //data.text
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('verify footer text of programs tab', async function (dataTable) {
    const data: any[][] = dataTable.raw();
    for (let i = 0; i < data.length; i += 1) {
        // const text: any = await element(by.xpath(consult.footer.replace('$data$', data[i][1]))).getText();
        obj.CompareValues(data[i][1], await element(by.xpath(consult.footer.replace('$data$', data[i][1]))).getText(), data[i][1]);
    }
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('verify header text of consults page', async function (dataTable) {
    var data = dataTable.rowsHash();
    // const text: any = await element(by.xpath(consult.sectiontitle.replace('$data$', data.text))).getText();
    obj.CompareValues(data.text, await element(by.xpath(consult.sectiontitle.replace('$data$', data.text))).getText(), data.text);
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('verify avatar exists in member header', async function (dataTable) {
    var data = dataTable.rowsHash();
    obj.CompareValues(data.data, await element(by.xpath(consult.avatartext.replace('$data$', data.data))).getText(), data.data);
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('verify tabs text', async function (dataTable) {
    const data: any[][] = dataTable.raw();
    for (let i = 0; i < data.length; i += 1) {
        // const text: any = await element(by.xpath(consult.tab.replace('$data$', data[i][1]))).getText();
        obj.CompareValues(data[i][0], await element(by.xpath(consult.tab.replace('$data$', data[i][1]))).getText(), data[i][1]);
    }
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('copy member details', async function (dataTable) {
    name = await consult.membername.getText();
    await browser.actions().mouseMove(consult.membername).perform();
    emrid = await element(by.xpath(consult.copyclipboard.replace('$data$', "EMR ID"))).getText();
    await browser.actions().mouseMove(element(by.xpath(commonpage.divcontains.replace('$data$', "State")))).perform();
    address = await consult.copyaddress.getText();
    dob = await element(by.xpath(consult.copyclipboard.replace('$data$', "DOB"))).getText();
    console.log(name + emrid + address + dob);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('verify member details with copied member details', async function (dataTable) {
    var data = dataTable.rowsHash();
    const emrid2: any = emrid.split(":");
    const dob2: any = dob.split(":");
    obj.CompareValues("Name:", name.trim(), data.name + " " + namevalue());
    obj.CompareValues("Emr id:", emrid2[1].trim(), data.emrid);
    obj.CompareValues("Address", address, data.address);
    obj.CompareValues("Dob:", dob2[1].trim(), data.dob);
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('verify button text', async function (dataTable) {
    const data: any[][] = dataTable.raw();
    for (let i = 0; i < data.length; i += 1) {
        obj.CompareValues("button text ", await element(by.xpath(commonpage.buttonspan.replace('$data$', data[i][1]))).getText(), data[i][1]);
    }
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('verify button is clickable or not', async function (dataTable) {
    var data = dataTable.rowsHash();
    await obj.isClickable(element(by.xpath(consult.button.replace('$data$', data.button_text))), data.button_text);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('click on button', async function (dataTable) {
    var data = dataTable.rowsHash();
    await element(by.xpath(commonpage.buttonspan.replace('$data$', data.button_text))).click();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('verify header text of consults edit page', async function (dataTable) {
    const data: any[][] = dataTable.raw();
    for (let i = 0; i < data.length; i += 1) {
        // const text: any = await element(by.xpath(consult.headerinedit.replace('$data$', data[i][1]))).getText();
        obj.CompareValues("header text", await element(by.xpath(consult.headerinedit.replace('$data$', data[i][1]))).getText(), data[i][1]);
    }
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('verify header text of dropdown', async function (dataTable) {
    var data = dataTable.rowsHash();
    obj.CompareValues("dropdown header text", await element(by.xpath(consult.matform.replace('$data$', data.text))).getText(), data.text);
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('verify text in dropdown combobox', async function (dataTable) {
    var data = dataTable.rowsHash();
    obj.CompareValues("drop down text", await consult.matselectvalue.getText(), data.text);       //data.text
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('verify status', async function (dataTable) {
    var data = dataTable.rowsHash();
    obj.CompareValues("Status", await consult.statusvalue.getText(), data.status);
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('verify text of heading in consult edit page', async function (dataTable) {
    var data = dataTable.rowsHash();
    obj.CompareValues("Heading", await element(by.xpath(consult.headerinedit.replace('$data$', data.heading))).getText(), data.heading);
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('verify text in empty contailer', async function (dataTable) {
    const data: any[][] = dataTable.raw();
    for (let i = 0; i < data.length; i += 1) {
        const data1: any = await data[i][1].split(".");
        // const text: any = await element(by.xpath(consult.emptycontainer.replace('$data$', data1[0]))).getText();
        obj.CompareValues("text in empty container", await element(by.xpath(consult.emptycontainer.replace('$data$', data1[0]))).getText(), data[i][1]);             //data[i][1]
    }
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('verify notes heading', async function (dataTable) {
    const data: any[][] = dataTable.raw();
    for (let i = 0; i < data.length; i += 1) {
        // const text: any = await element(by.xpath(consult.heading.replace('$data$', data[i][1]))).getText();
        obj.CompareValues("Notes heading", await element(by.xpath(consult.heading.replace('$data$', data[i][1]))).getText(), data[i][1]);
    }
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('verify text in empty notes', async function (dataTable) {
    const data: any[][] = dataTable.raw();
    for (let i = 0; i < data.length; i += 1) {
        // const text: any = await element(by.xpath(consult.notes.replace('$data$', data[i][0]))).getAttribute('data-placeholder');
        obj.CompareValues("text in empty notes", await element(by.xpath(consult.notes.replace('$data$', data[i][0]))).getAttribute('data-placeholder'), data[i][1]);
    }
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('verify linked text in checkbox field', async function (dataTable) {
    var data = dataTable.rowsHash();
    obj.CompareValues("linked text", await element(by.xpath(consult.divbutton.replace('$data$', data.text))).getText(), data.text);
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('refresh the browser', async function () {
    await browser.refresh(1000);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('click on linked text', async function (dataTable) {
    var data = dataTable.rowsHash();
    await element(by.xpath(consult.divbutton.replace('$data$', data.text))).click();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});


Then('verify the data inside the container', async function (dataTable) {
    var data = dataTable.rowsHash();
    await browser.sleep(4000);
    obj.CompareValues("acknowledgement data", await consult.acknowledge.getText(), data.data);
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('select consult type', async function (dataTable) {
    var data = dataTable.rowsHash();
    await consult.matselect.click();
    await obj.WaitforElementPresence(consult.listbox);
    await element(by.xpath(consult.dropdownoption.replace('$data$', data.type))).click();   //element(by.xpath(commonpage.matoption, data.type)
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('verify data in acknowledge before clicking show message', async function (dataTable) {
    var data = dataTable.rowsHash();
    obj.CompareValues("data", await element(by.xpath(commonpage.divcontains.replace('$data$', data.text))).getText(), data.text);
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('verify left side member panel contents', async function (dataTable) {
    const data: any[][] = dataTable.raw();
    const language: any = data[0][0].split(",");
    obj.CompareValues("leftsidelanguageicon", await obj.Presence(element(by.xpath(consult.verifylanguageicon.replace('$language$', language[1])))), data[0][1]);
    for (let i = 1; i < 4; i += 1) {
        obj.CompareValues("leftsidepanel", await obj.Presence(element(by.xpath(consult.verifyleftsideicon.replace('$icon$', data[i][0])))), data[0][1]);
    }
    obj.CompareValues("leftsidetasktab", await obj.Presence(element(by.xpath(consult.verifyleftsidetasktab.replace('$tab$', data[4][0])))), data[4][1]);
    for (let i = 5; i < data.length; i += 1) {
        obj.CompareValues("leftsidepanel", await obj.Presence(element(by.xpath(consult.verifyleftsidetab.replace('$tab$', data[i][0])))), data[0][1]);
    }
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('user verifies contents of a text editor', async function (dataTable) {
    const data: any[][] = dataTable.raw();
    obj.CompareValues("spechrecognisation:", await obj.Presence(element(by.xpath(consult.speachrecognisation.replace('$heading$', data[0][1])))), data[1][1]);
    for (let i = 2; i < data.length; i += 1) {
        obj.CompareValues("icon verify", await obj.Presence(element(by.xpath(consult.noteicons.replace('$heading$', data[0][1]).replace('$icon$', data[i][0])))), data[i][1])
    }
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});






