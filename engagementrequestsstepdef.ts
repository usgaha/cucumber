import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Key, browser, by, element, protractor } from "protractor";
import { commonPAgeXpath } from "../pages/commonPage";
import { Base } from "../pages/BaseFunctions";
import { serviceplan } from "../pages/goalpage";
import { unefied } from "../pages/unefieddpage";
import { expect } from "chai";

import { EngagementRequest } from "../pages/engagaemntrequestpage";
import { namevalue } from "../pages/dbclass";
import { consultpage } from "../pages/consultpage";
var commonpage = new commonPAgeXpath();
var goalpage = new serviceplan();
setDefaultTimeout(600000);
var consult = new consultpage();
browser.manage().timeouts().implicitlyWait(10000);
browser.waitForAngularEnabled(false);
var engagementpage = new EngagementRequest();
let countbefore: any;
let countafter: any;
let name: any;
let number: any;
let email: any;
let emrid: any;
let address: any;
let dob: any;
const obj = new Base();
Then('Login to the MMR', async function (dataTable) {
    var data = dataTable.rowsHash();
    await browser.get("https://mmr-unified.mindoula.com/");
    await obj.setInputField(await obj.replaceXpath(commonpage.inputFormcontrolname, "username"), data.EMAIL);
    await obj.setInputField(await obj.replaceXpath(commonpage.inputFormcontrolname, "password"), data.PASSWORD);
    await obj.clickElement(await obj.replaceXpath(commonpage.buttonspan, "Sign In"));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  Then('Verify Engagment request icon Exists', async function (dataTable) {
    var data = dataTable.rowsHash();
    let icon: any = await obj.replaceXpath(engagementpage.iconengagementrequest, data.ICON).isPresent();
    if (icon) {
      icon = "YES";
    } else {
      icon = "NO";
    }
    obj.CompareValues("ICON",icon, data.ICON_EXISTS);
    obj.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  Then('Engagement Request Count Before', async function () {
    countbefore = await obj.getTEXT(engagementpage.iconCount);
    console.log(countbefore);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  
  Then('verify count displayed on engagement request icon', async function (dataTable) {
    var data = dataTable.rowsHash();
    expect(parseInt(countbefore)).to.be.greaterThanOrEqual(parseInt(data.COUNT));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  Then('verify text when mouse hover on engagement request icon', async function (dataTable) {
    var data = dataTable.rowsHash();
    const obj1 = new Base();
    await browser.actions().mouseMove(await obj.replaceXpath(engagementpage.iconengagementrequest, data.TEXT)).perform();
    await obj.WaitforElementVisible(engagementpage.tooltiptext);
    const text: any = await obj.getTEXT(engagementpage.tooltiptext);
    obj1.CompareValues("tooltip",text, data.TEXT);
    obj1.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  
Then('save member details', async function (dataTable) {
    name = await consult.membername.getText();
    address = await consult.copyaddress.getText();
    dob = await element(by.xpath(consult.copyclipboard.replace('$data$', "DOB"))).getText();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  
  Then('Logout from Website', async function () {
    await browser.sleep(1000);
    await obj.clickElement(engagementpage.uicavatar);
    await obj.clickElement(await obj.replaceXpath(engagementpage.divcontains, "Logout"));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  
  Then('Navigate to member portal', async function () {
    await browser.get("https://member-staging.mindoula.com/");
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  
  Then('Enter the mobile number', async function () {
    await browser.sleep(1000);
    await obj.setInputField(await obj.replaceXpath(engagementpage.inputFormcontrolname, "username"), number[1].trim());
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  
  
  Then('Enter Member data', async function (dataTable) {
    var data = dataTable.rowsHash();
    await obj.setInputField(await obj.replaceXpath(engagementpage.inputFormcontrolname, "firstName"), data.FIRST_NAME);
    await obj.setInputField(await obj.replaceXpath(engagementpage.inputFormcontrolname, "lastName"), namevalue());
    await obj.setInputField(await obj.replaceXpath(engagementpage.inputFormcontrolname, "birth_date"), data.DOB);
    await obj.setInputField(await obj.replaceXpath(engagementpage.inputFormcontrolname, "zipcode"), data.ZIP_CODE);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  
  Then('Click on I consent in confirm consent', async function () {
    await obj.clickElement(await obj.replaceXpath(engagementpage.spancontains, "I Consent"));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  
  Then('Enter the Access Code', async function (dataTable) {
    var data = dataTable.rowsHash();
    await browser.sleep(1000);
    for (let i = 0; i < 6; i += 1) {
      await obj.setInputField(await obj.replaceXpath(engagementpage.pincode, i), i + 1);
    }
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  
  Then('Click on continue button', async function () {
    await obj.clickElement(await obj.replaceXpath(engagementpage.spancontains, "Continue"));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  Then('Click on setup on {int} step verification', async function (int) {
    await obj.clickElement(await obj.replaceXpath(engagementpage.span, "Set up"));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  
  Then('Enter the pincode', async function (dataTable) {
    var data = dataTable.rowsHash();
    await browser.sleep(1000);
    for (let i = 0; i < 6; i += 1) {
      await obj.setInputField(await obj.replaceXpath(engagementpage.pincode, i), i + 1);
    }
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  
  
  Then('Enter the email address in confirm email', async function () {
    await obj.setInputField(await obj.replaceXpath(engagementpage.inputFormcontrolname, "contact"), email);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  Then('Verify items exists in Member left Navigation', async function (dataTable) {
    var data = dataTable.rowsHash();
    const obj2 = new Base();
    const item1: any = await obj.getTEXT(await obj.replaceXpath(engagementpage.divcontains, data.ITEM1));
    obj2.CompareValues("item in left nav",item1, data.ITEM1);
    const item2: any = await obj.getTEXT(await obj.replaceXpath(engagementpage.divcontains, data.ITEM2));
    obj2.CompareValues("item in left nav",item2, data.ITEM2);
    const item3: any = await obj.getTEXT(await obj.replaceXpath(engagementpage.divcontains, data.ITEM3));
    obj2.CompareValues("item in left nav",item3, data.ITEM3);
    obj2.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  
  Then('Verify Items Exists With Member Login', async function (dataTable) {
    var data = dataTable.rowsHash();
    const obj2 = new Base();
    const item1: any = await obj.getTEXT(await obj.replaceXpath(engagementpage.memberportralbtns, data.ITEM1));
    obj2.CompareValues("item in member login",item1, data.ITEM1);
    const item2: any = await obj.getTEXT(await obj.replaceXpath(engagementpage.memberportralbtns, data.ITEM2));
    obj2.CompareValues("item in member login",item2, data.ITEM2);
    const item3: any = await obj.getTEXT(await obj.replaceXpath(engagementpage.memberportralbtns, data.ITEM3));
    obj2.CompareValues("item in member login",item3, data.ITEM3);
    obj2.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  
  Then('Take Action From Member Home Page', async function (dataTable) {
    const data1 = dataTable.hashes();
    const data = data1[0];
    await browser.refresh(1000);
    await obj.clickElement(await obj.replaceXpath(engagementpage.headerbtnclick, data.Button_Container));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  
  Then('Click on the Care_Extender_name in the Chat Inbox', async function (dataTable) {
    const data1 = dataTable.hashes();
    const data = data1[0];
    await obj.clickElement(await obj.replaceXpath(engagementpage.chatmemberclick, data.Care_Extender_Name));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  
  Then('Enter Message in Chat Text Box', async function (dataTable) {
    const data1 = dataTable.hashes();
    const data = data1[0];
    await obj.setInputField(engagementpage.inputmessage, data.MESSAGE);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  Then('click on Send Icon in messenger', async function () {
    await obj.clickElement(await obj.replaceXpath(engagementpage.uicicon, "send-circle"));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  Then('Wait for {int} minutes in chat room for Auto Reply Message', { timeout: 60 * 50000 }, async function (int) {
    console.log("wait");
    await browser.sleep(250000);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  
  Then('Verify the text message is sent to the Care_Extender_Name Successfully', { timeout: 60 * 60000 }, async function (dataTable) {
    const data1 = dataTable.hashes();
    const data = data1[0];
    const obj2 = new Base();
    // await browser.sleep(50000);
    const message: any = await obj2.getTEXT(await obj.replaceXpath(engagementpage.divcontains, data.message));
    obj2.CompareValues("Message",message, data.message);
    obj2.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  
  Then('Verify the AutoReply message recieved.', { timeout: 100 * 60000 }, async function (dataTable) {
    const data1 = dataTable.hashes();
    const data = data1[0];
    const obj2 = new Base();
    // await browser.sleep(50000);
    const message: any = await obj2.getTEXT(await obj.replaceXpath(engagementpage.msgtext, "Your care team is alerted"));
    console.log(message);
    obj2.CompareValues("Message",message, data.Auto_Reply_message);
    obj2.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  
  
  Given('Navigate to mMR portal', async function () {
    await browser.get("https://mmr-staging.mindoula.com/");
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  
  
  
  
  Then('Click on Engagement Requests Icon on the Casemanager Home Page', async function () {
    await obj.clickElement(await obj.replaceXpath(engagementpage.iconengagementrequest, "Engagement Requests"));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  
  Then('Select Engagement Requests view', async function (dataTable) {
    const data1 = dataTable.hashes();
    const data = data1[0];
    await obj.clickElement(engagementpage.detailedview);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  
  
  Then('Verify Engagement Request exists for Chat Auto Reply', async function (dataTable) {
    await browser.refresh(1000);
    var data = dataTable.rowsHash();
    const obj2 = new Base();
    const Name: any[] = name.split(" ");
    let presence: any = await obj.replaceXpath(engagementpage.verifymemberwithoutcritical, Name[1].trim()).isPresent();
    if (presence) {
      presence = "YES"
    } else {
      presence = "NO"
    }
    obj2.CompareValues("Reply",presence, data.RECORD_EXISTS);
    obj2.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  
  Then('Click on engagement request for Chat Auto Reply', async function (dataTable) {
    const Name: any[] = name.split(" ");
    await obj.clickElement(await obj.replaceXpath(engagementpage.verifyname, Name[1].trim()));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  Then('Verify member request Icons exists', async function (dataTable) {
    var data = dataTable.rowsHash();
    const obj2 = new Base();
    await browser.refresh(1000);
    let verifyphone: any = await obj.replaceXpath(engagementpage.phoneicons, "phone").isPresent();
    if (verifyphone) {
      verifyphone = "YES";
    } else {
      verifyphone = "NO";
    }
    obj2.CompareValues("phone",verifyphone, data.phone);
    let verifychat: any = await obj.replaceXpath(engagementpage.phoneicons, "chat").isPresent();
  
    if (verifychat) {
      verifychat = "YES";
    } else {
      verifychat = "NO";
    }
    obj2.CompareValues("chat",verifychat, data.chat);
    obj2.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  
  
  Then('Verify Request created for primary CE', async function (dataTable) {
    var data = dataTable.rowsHash();
    const obj2 = new Base();
    const text: any = await obj.getTEXT(await obj.replaceXpath(engagementpage.spancontains, data.PRIMARY_CARE_EXTENDER));
    obj2.CompareValues("request",text, data.PRIMARY_CARE_EXTENDER);
    obj2.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  
  
  Then('Mouse hover on primary CE', async function (dataTable) {
    var data = dataTable.rowsHash();
    await browser.sleep(1000);
    await browser.actions().mouseMove(await obj.replaceXpath(engagementpage.assignce, data.PRIMARY_CARE_EXTENDER)).perform();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  
  Then('Click Edit icon on primary CE', async function () {
    await obj.clickElement(await obj.replaceXpath(engagementpage.uicedit, "MMR  Casecare"));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  
  Then('Select Non primary CE', async function (dataTable) {
    var data = dataTable.rowsHash();
    await obj.clickElement(engagementpage.selectmat);
    await obj.clickElement(await obj.replaceXpath(engagementpage.matoption, data.NON_PRIMARY_CARE_EXTENDER));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  
  Then('Verify Toast message', async function (dataTable) {
    var data = dataTable.rowsHash();
    const obj2 = new Base();
    const MESSAGE: any = await obj.getTEXT(await obj.replaceXpath(engagementpage.toastmessage, data.MESSAGE));
    obj2.CompareValues("toast message",MESSAGE, data.MESSAGE);
    obj2.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  
  Then('Click on engagement request button', async function (dataTable) {
    var data = dataTable.rowsHash();
    await obj.clickElement(await obj.replaceXpath(engagementpage.spancontains, data.BUTTON));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  
  
  Then('Verify member request buttons exists', async function (dataTable) {
    const data: any[][] = dataTable.raw();
    const obj2 = new Base();
    for (let i = 0; i < data.length; i += 1) {
      let presence: any = await obj.replaceXpath(engagementpage.spancontains, data[i][0]).isPresent();
      if (presence) {
        presence = "YES"
      } else {
        presence = "NO"
      }
      obj2.CompareValues("button exists",presence, data[i][1]);
    }
    obj2.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  
  Then('verify the Activity log Text', async function (dataTable) {
    const data: any[][] = dataTable.raw();
    const obj2 = new Base();
    for (let i = 0; i < data.length; i += 1) {
      const item1: any = await obj.getTEXT(await obj.replaceXpath(engagementpage.spancontains, data[i][1]));
      obj2.CompareValues("Activity log",item1, data[i][1]);
    }
    obj2.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  Then('Verify the Activity log Time Exists', async function (dataTable) {
    const data: any[][] = dataTable.raw();
    const obj2 = new Base();
    for (let i = 0; i < data.length; i++) {
      let presence: any = await obj.replaceXpathTwo(engagementpage.timeverify, data[i][0], data[i][1])
      if (presence) {
        presence = "YES"
      } else {
        presence = "NO"
      }
      obj2.CompareValues("Activity log Time Exists",presence, data[i][1]);
    }
    obj2.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  
  Then('Select Close Without Case Notes', async function () {
    await obj.clickElement(engagementpage.carot);
    await obj.clickElement(engagementpage.closeinengreq);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  });
  
  
  Then('Verify member request status exists', async function (dataTable) {
    var data = dataTable.rowsHash();
    const obj2 = new Base();
    let presence: any = await obj.replaceXpath(engagementpage.divcontains, "Closed").isPresent();
    if (presence) {
      presence = "YES"
    } else {
      presence = "NO"
    }
    obj2.CompareValues("request status",presence, data.Closed);
    obj2.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  Then('Engagement Request Count After', async function () {
    await browser.sleep(1000);
    countafter = await obj.getTEXT(engagementpage.iconCount);
    console.log(countafter);
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  Then('Compare the Eng Request Count', async function (dataTable) {
    await browser.sleep(1000);
    console.log(countafter);
    console.log(countbefore);
    expect(parseInt(countbefore)).to.be.greaterThan(parseInt(countafter), "countafter is greater than countbefore");
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  Then('Click on engagement request', async function (dataTable) {
    await browser.sleep(2000);
    const Name: any[] = name.split(" ");
    await obj.clickElement(await obj.replaceXpath(engagementpage.verifymemberinengcritical, Name[1].trim()));
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  
  Then('Verify Engagement Request exists', async function (dataTable) {
    await browser.refresh(1000);
    var data = dataTable.rowsHash();
    const obj2 = new Base();
    const Name: any[] = name.split(" ");
    let presence: any = await obj.replaceXpath(engagementpage.verifymemberinengcritical, Name[1].trim()).isPresent();
    if (presence) {
      presence = "YES"
    } else {
      presence = "NO"
    }
    obj2.CompareValues("Engagement Request",presence, data.RECORD_EXISTS);
    obj2.expect();
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  
  });
  
  
  