import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { browser, by, element } from "protractor";
import { commonPAgeXpath } from "../pages/commonPage";
import { Base } from "../pages/BaseFunctions";
import { unefied } from "../pages/unefieddpage";
import { databasewithparm, phnumbeer } from "../pages/dbclass";
import { assertion } from "../pages/base";
import { EngagementRequest } from "../pages/engagaemntrequestpage";
import { Casenote } from "../pages/casenotepage";
var commonpage = new commonPAgeXpath();
var casenote = new Casenote;
var unefiedpage = new unefied();
var mempage = new EngagementRequest();
const obj = new Base();
const nmae = new assertion();
let lastname: any;
let mobilenumber: any;
setDefaultTimeout(600000);
browser.manage().timeouts().implicitlyWait(10000);
browser.waitForAngularEnabled(false);
Given('user navigates to mmr web', async function (dataTable) {
    var data = dataTable.rowsHash();
    await browser.get(data.url);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('user gives email as {string}', async function (string) {
    await obj.replaceXpath(commonpage.input, "email").sendKeys(string);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('user gives password as {string}', async function (string) {
    await obj.replaceXpath(commonpage.input, "password").sendKeys(string);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('user clicks on submit button', async function () {
    await obj.replaceXpath(commonpage.buttonspan, "Sign In").click();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('opens left navigation menu', async function () {
    await obj.WaitforElementClickable(await obj.replaceXpath(commonpage.uicicon, "carrot-right"));
    await obj.clickElement(await obj.replaceXpath(commonpage.uicicon, "carrot-right"));
    console.log("left nav opened");
    await browser.sleep(3000);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('user clicks on Members', async function () {
    const obj = new Base();
    await obj.replaceXpath(commonpage.leftnav, 'Members').click();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('click on Add Member', async function () {
    await obj.clickElement(await obj.replaceXpath(commonpage.buttonspan, "Add Member"))
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('close left navigation menu', async function () {
    await unefiedpage.closeleftnav.click();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('Enter data in Add Member Page with all details', async function (dataTable) {
    const data = dataTable.hashes();
    const data1 = data[0];
    const obj2 = new assertion();
    await obj.setInputField(obj.replaceXpath(commonpage.inputFormcontrolname, "firstName"), data1.fname);
    await obj.setInputField(obj.replaceXpath(commonpage.inputFormcontrolname, "middleName"), data1.mname);
    lastname = await databasewithparm("CMR");
    console.log(lastname);
    // nmae.name1() 
    await obj.setInputField(obj.replaceXpath(commonpage.inputFormcontrolname, "lastName"), lastname);
    await obj.setInputField(obj.replaceXpath(commonpage.inputFormcontrolname, "birthDate"), data1.dob);
    await obj.setInputField(obj.replaceXpath(commonpage.inputFormcontrolname, "preferredName"), data1.pname);
    await obj.setDropdownField(obj.replaceXpath(mempage.matselect, "Gender (Assigned at Birth) *"),
        obj.replaceXpath(commonpage.option2, data1.gender));
    await obj.setDropdownField(obj.replaceXpath(mempage.matselect, "Gender Identity"),
        obj.replaceXpath(commonpage.option2, data1.gender));
    await obj.setDropdownField(obj.replaceXpath(mempage.matselect, "Pronoun"),
        obj.replaceXpath(commonpage.option2, data1.PRONOUN));
    await obj.setDropdownField(obj.replaceXpath(mempage.matselect, "Sexual Orientation"),
        obj.replaceXpath(commonpage.option2, data1.SEXUAL_ORIENTATION));
    await obj.setDropdownField(obj.replaceXpath(mempage.matselect, "Marital Status"),
        obj.replaceXpath(commonpage.option2, data1.marital_status));
    await obj.setDropdownField(obj.replaceXpath(mempage.matselect, "Primary Language"),
        obj.replaceXpath(commonpage.option2, data1.PRIMARY_LANGUAGE));
    await obj.setDropdownField(obj.replaceXpath(mempage.matselect, "Time Zone"),
        obj.replaceXpath(commonpage.option2, data1.TIME_ZONE));
    await obj.setDropdownField(obj.replaceXpath(mempage.matselect, "Ethnicity"),
        obj.replaceXpath(commonpage.option2, data1.ETHNICITY));
    await obj.setDropdownField(obj.replaceXpath(mempage.matselect, "Race"),
        obj.replaceXpath(commonpage.option2, data1.RACE));
    await obj.setDropdownField(obj.replaceXpath(mempage.matselect, "Lead Type"),
        obj.replaceXpath(commonpage.option2, data1.LEAD_TYPE));
    await obj.setDropdownField(obj.replaceXpath(mempage.matselect, "Lead Source"),
        obj.replaceXpath(commonpage.option2, data1.LEAD_SOURCE));
    await obj.setInputField(obj.replaceXpath(commonpage.inputFormcontrolname, "email"), obj2.Mail());
    mobilenumber = await phnumbeer("21255663");
    console.log(mobilenumber);
    await obj.setInputField(obj.replaceXpath(commonpage.inputFormcontrolname, "mobile_number"), mobilenumber);
    await obj.setInputField(obj.replaceXpath(commonpage.inputFormcontrolname, "address"), data1.address);
    await obj.WaitforElementClickable(obj.replaceXpath(commonpage.buttonspan, "Click here to enter the address manually"));
    await obj.clickElement(obj.replaceXpath(commonpage.buttonspan, "Click here to enter the address manually"));
    await obj.WaitforElementClickable(obj.replaceXpath(commonpage.buttonspan, "Use Suggested Address"));
    await obj.clickElement(obj.replaceXpath(commonpage.buttonspan, "Use Suggested Address"));
    await browser.actions().mouseMove(await obj.replaceXpath(commonpage.checkbox, "Additional Information")).perform();
    await obj.clickElement(obj.replaceXpath(commonpage.checkbox, "Additional Information"));
    await obj.setDropdownField(obj.replaceXpath(mempage.matselect, "Housing Status"),
        obj.replaceXpath(commonpage.option2, data1.Housing_status));
    await obj.setDropdownField(obj.replaceXpath(mempage.matselect, "Religious Affiliation"),
        obj.replaceXpath(commonpage.option2, data1.Religious_Affiliation));
    await obj.setInputField(await obj.replaceXpath(commonpage.testarea2, "physicalDescription"), data1.Note);
    await obj.WaitforElementClickable(await obj.replaceXpath(unefiedpage.memberprofeciency, "Read"));
    await obj.clickElement(await obj.replaceXpath(unefiedpage.memberprofeciency, "Read"));
    await obj.clickElement(await obj.replaceXpath(commonpage.matoption, data1.Read));
    await obj.clickElement(await obj.replaceXpath(unefiedpage.memberprofeciency, "Write"));
    await obj.clickElement(await obj.replaceXpath(commonpage.matoption, data1.Write));
    await obj.clickElement(await obj.replaceXpath(unefiedpage.memberprofeciency, "Speak"));
    await obj.clickElement(await obj.replaceXpath(commonpage.matoption, data1.Speak));
    await obj.replaceXpath(commonpage.matoption, data1.Speak);
    await obj.clickElement(commonpage.submit);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('click on Quick Add', async function () {
    await obj.clickElement(await obj.replaceXpath(commonpage.uicicon, "plus-circle"));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('select tab in list', async function (dataTable) {
    var data = dataTable.rowsHash();
    await obj.WaitforElementClickable(await obj.replaceXpath(unefiedpage.quickadd, data.section));
    await obj.clickElement(await obj.replaceXpath(unefiedpage.quickadd, data.section));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});


Then('Navigate to Program Look Up', async function () {
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('Enter data in Add Program page', async function (dataTable) {
    const data1 = dataTable.hashes();
    const data = data1[0];
    await obj.clickElement(mempage.none);
    await obj.WaitforElementClickable(await obj.replaceXpath(mempage.plus, data.PARENT_PROGRAM));
    await obj.clickElement(await obj.replaceXpath(mempage.plus, data.PARENT_PROGRAM));
    await obj.clickElement(await obj.replaceXpath(mempage.spancontains, data.program));
    await obj.setInputField(await obj.replaceXpath(mempage.inputdataplaceholder, "EMR ID"), data.EMR_ID);
    await obj.setInputField(await obj.replaceXpath(mempage.inputdataplaceholder, "Medicaid ID"), data.medicaid);
    await obj.setInputField(await obj.replaceXpath(mempage.inputdataplaceholder, "Alternate Identifier"), data.alt_identifier);
    await obj.setInputField(await obj.replaceXpath(mempage.inputdataplaceholder, "Insurance Note"), data.insurance_note);
    await obj.clickElement(await obj.replaceXpath(mempage.matselect, "Provider *"));
    await obj.clickElement(await obj.replaceXpath(mempage.spancontains, data.provider));
    // await obj.clickElement(await obj.replaceXpath(mempage.matselect, "Member Type"));
    // await obj.clickElement(await obj.replaceXpath(mempage.spancontains, data.Member_Type));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");

});
Then('click on Save button', async function () {
    // await obj.WaitforElementClickable(commonpage.popupsave);
    await obj.clickElement(commonpage.popupsave);
    await browser.sleep(1000);
    await browser.refresh(1000);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('click on View all', async function () {
    await obj.clickElement(unefiedpage.viewall);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");

});

Then('click on tab', async function (dataTable) {
    var data = dataTable.rowsHash();
    await obj.clickElement(await obj.replaceXpath(unefiedpage.tabinviewall, data.Tab));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});


Then('click on Add Care Team', async function () {
    await obj.WaitforElementClickable(obj.replaceXpath(commonpage.buttonspan, "Add Mindoula Team Member"));
    await obj.clickElement(obj.replaceXpath(commonpage.buttonspan, "Add Mindoula Team Member"));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('Enter Data in Care Team Page', async function (dataTable) {
    const data1 = dataTable.hashes();
    const data = data1[0];
    await obj.clickElement(await obj.replaceXpath(unefiedpage.selectpalceholder, "Select Role*"));
    await obj.clickElement(await obj.replaceXpath(unefiedpage.spancontains, data.Role));
    await obj.clickElement(await obj.replaceXpath(unefiedpage.selectpalceholder, "Select Care Extender"));
    await obj.clickElement(await obj.replaceXpath(unefiedpage.spancontains, data.MemberName));
    await obj.setDateField(data.fromDate);
    if (data.Primary === "Yes") {
        await obj.clickElement(unefiedpage.primarycheck);
    }
    await obj.clickElement(await obj.replaceXpath(unefiedpage.spancontains, "Save"));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('Verify Data in Care Team Page', async function (dataTable) {
    const data = dataTable.hashes();
    const data1 = data[0];
    let presence: any = await obj.Presence(obj.replaceXpath(casenote.divtext, data1.ROLE));
    if (presence === "YES") {
        obj.CompareValues("Role", await obj.getTEXT(await obj.replaceXpath(casenote.divtext, data1.ROLE)), data1.ROLE);
    } else {
        obj.CompareValues("Role", "Not Present", data1.ROLE);
    }
    const value1: any = await obj.getTEXT(await obj.replaceXpath(casenote.divtext, data1.MEMBER_NAME));
    obj.CompareValues("membername", value1, data1.MEMBER_NAME);
    let yes: any = obj.replaceXpath(casenote.primary, data1.ROLE).isPresent();
    if (yes) {
        yes = 'Yes';
    } else {
        yes = 'No';
    }
    obj.CompareValues("presence", yes, data1.PRIMARY);
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('user clicks on view More', async function (dataTable) {
    var data = dataTable.rowsHash();
    await browser.actions().mouseMove(await obj.replaceXpath(commonpage.header, data.section)).perform();
    await obj.clickElement(obj.replaceXpath(unefiedpage.viewmore, data.section));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});


Then('user verifies page text', async function (dataTable) {
    var data = dataTable.rowsHash();
    const header: any = await obj.getTEXT(obj.replaceXpath(unefiedpage.popupheader, data.text));
    obj.CompareValues("header text", header, data.text);
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});


Then('user verify button is clickable or not', async function (dataTable) {
    var data = dataTable.rowsHash();
    await obj.WaitforElementClickable(await obj.replaceXpath(unefiedpage.popupbtn, data.button_text));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});


Then('verify icon is clickable or not', async function (dataTable) {
    var data = dataTable.rowsHash();
    await obj.WaitforElementClickable(await obj.replaceXpath(unefiedpage.uicicon, data.icon));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});


Then('verify mandatory fields text', async function (dataTable) {
    const data: any[][] = dataTable.raw();
    for (let i = 0; i < data.length; i++) {
        const text: any = await obj.getTEXT(await obj.replaceXpath(commonpage.mandatorytext, data[i][0]));
        obj.CompareValues("mandatory fields text", text, data[i][1]);
    }
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});

Then('verify sub text in demographics page', async function (dataTable) {
    const data: any[][] = dataTable.raw();
    for (let i = 0; i < data.length; i += 1) {
        let text: any = await obj.getTEXT(await obj.replaceXpath(commonpage.sectiontitle, data[i][1]));
        console.log(text);
        obj.CompareValues("sub text", text, data[i][1]);
    }
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});


Then('verify details of user', async function (dataTable) {
    const data: any[][] = dataTable.raw();
    for (let i = 0; i < data.length; i++) {
        const text: any = await obj.getTEXT(await obj.replaceXpath(unefiedpage.verifydemographtext, data[i][0]));
        obj.CompareValues("details of user", text, data[i][1]);
    }
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('close the page', async function () {
    await obj.clickElement(await obj.replaceXpath(commonpage.uicicon, "close"));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('verify header of quick add', async function (dataTable) {
    const data: any[][] = dataTable.raw();
    for (let i = 0; i < data.length; i += 1) {
        obj.CompareValues("header in Quick Add", await obj.getTEXT(element(by.xpath(unefiedpage.verifyheaderinquickall.replace("$header$", data[i][1])))), data[i][1]);
    }
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('verify buttons in Quick Add', async function (dataTable) {
    const data: any[][] = dataTable.raw();
    for (let i = 1; i < data.length; i += 1) {
        let presence: any = await obj.Presence(element(by.xpath(unefiedpage.verifybuttoninquickadd.replace("$icon$", data[i][0]).replace("$tabname$", data[i][1]))));
        if (presence === "YES") {
            obj.CompareValues("Quick Add Button", await obj.getTEXT(element(by.xpath(unefiedpage.verifybuttoninquickadd.replace("$icon$", data[i][0]).replace("$tabname$", data[i][1])))), data[i][1]);
        } else {
            obj.CompareValues("Quick Add Button", "Not Present", data[i][1]);
        }
    }
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('verify Menu Contents in View All', async function (dataTable) {
    const data: any[][] = dataTable.raw();
    for (let i = 0; i < data.length; i += 1) {
        obj.CompareValues("Menu item", await obj.getTEXT(element(by.xpath(unefiedpage.verifyViewallmenuitem.replace("$tab$", data[i][1])))), data[i][1]);
    }
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});
Then('close Quick Add', async function () {
    await obj.clickElement(element(by.xpath(unefiedpage.verifyheaderinquickall.replace("$header$", "PLANS"))));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});