import { ElementFinder, ExpectedConditions, browser, by, element } from "protractor";
import { config, expect } from "chai";
import { commonPAgeXpath } from "./commonPage";
config.truncateThreshold = 0;
var commonpage = new commonPAgeXpath();
export class Base {
    array: any[];
    x: any[];
    seperator: any;
    currenntdate: any;
    todaydate: any;
    datevalue: any;
    previousdate: any;
    previousmonthdate: any;
    modifieddate: any;
    element: any;
    xpathmodified: any;
    senddate: any;
    webelement: any;
    attribute: any;
    formattedDate: any;
    Message: any = {};
    name:any;
    constructor() {
        this.array = [];
        this.x = [];
    }
    async scrollVerticalUp() {
        await browser.executeScript('window.scrollTo(0, -80000);');
    }
    async scrollVerticalBy() {
        // await browser.actions().sendKeys(protractor.Key.END).perform();
        await browser.executeScript('window.scrollTo(0, 80000);');
    }
    async WaitforElementPresence(element: any) {
        await browser.wait(ExpectedConditions.presenceOf(element), 20000);
    }
    async WaitforElementVisible(element: any) {
        await browser.wait(ExpectedConditions.visibilityOf(element), 100000);

    }
    async WaitforElementClickable(element: any) {
        await browser.wait(ExpectedConditions.elementToBeClickable(element), 20000);

    }
    async WaitforalertIsPresent() {
        await browser.wait(ExpectedConditions.alertIsPresent(), 10000);
    }
    async moveCursorToAnElement(element: any) {
        await browser.actions().mouseMove(element).perform();
    }
    async setChips_singleSelect(xpath: any, value: any) {
        await this.WaitforElementClickable(this.replaceXpath(xpath, value));
        await this.replaceXpath(xpath, value).click();
    }
    async setChips_multiSelect(xpath: any, array: any[]) {
        console.log(this.replaceXpath(xpath, array[0]));
        for (let i = 0; i < array.length; i += 1) {
            await this.replaceXpath(xpath, array[i]).click();
        }

    }
    async setTextArea(xpath: any, value: any) {
        await element(by.xpath(xpath)).sendKeys(value);
    }
    // expectfun() {
    //     expect(this.array).to.be.empty, JSON.stringify(this.array);
    // }
    // compareValues(actual: any, expected: any) {
    //     if (actual != expected) {
    //         this.array.push("Actual is " + actual + " and Expected is " + expected);
    //     }
    //     else {
    //         return "";
    //     }

    // }
    async setDateField(currentdate: any) {                        //clckk date
        this.seperator = parseInt(currentdate.match(/-?\d+/));//-4
        console.log("this.seperator.." + this.seperator);
        this.currenntdate = new Date();
        console.log("this.currenntdate...." + this.currenntdate);
        this.todaydate = this.currenntdate.getDate();//30 //2 //4
        console.log("this.todaydate.." + this.todaydate);
        this.datevalue = this.seperator + this.todaydate;
        console.log("this.datevalue...." + this.datevalue);//-4+30=26 same month //-4+2=-2 prev month //-4+4=0 same date
        this.previousdate = new Date();//2023-06-08
        this.previousdate.setDate(0);//prev month
        this.previousmonthdate = this.previousdate.getDate();//prev month last dast 31
        if (this.datevalue > 0) { //26
            await commonpage.openCalender.click();
            await this.replaceXpath(commonpage.datecell, this.datevalue).click();

        } else if (this.datevalue < 0) { //-2
            this.modifieddate = this.datevalue + this.previousmonthdate; //-2+31=28
            await commonpage.openCalender.click();
            await commonpage.prevmontharrow.click();
            await this.replaceXpath(commonpage.datecell, this.modifieddate).click();
        } else if (this.datevalue === 0) {
            await commonpage.openCalender.click();
            await commonpage.prevmontharrow.click();
            console.log("this.previousmonthdate..." + this.previousmonthdate);
            await this.replaceXpath(commonpage.datecell, this.previousmonthdate).click();//previous month last date
        } else {
            await commonpage.openCalender.click();
            await commonpage.currentDate.click();
        }
    }
    async setDropdownField(xpathforselect: any, xpathforoption: any) {
        await xpathforselect.click();
        await xpathforoption.click();
    }
    async setInputField(xpath: any, value: any) {
        await xpath.sendKeys(value);
    }
    async verifyAssessmentsFollowupTask(text: any, data: any) {
        await this.getTEXT(this.replaceXpath(commonpage.verifyfollowupassignemntstask, text));
        this.CompareValues("Assignment",text, data);
    }
    async dragAndDrop(dragelementxpath: any, dropelementxpath: any) {
        await browser.sleep(2000);
        const actions = browser.actions();
        await actions.mouseMove(dragelementxpath).perform();
        // Press the mouse button
        await actions.mouseDown().perform();
        // Move the mouse to the target element
        await actions.mouseMove(dropelementxpath).perform();
        // Release the mouse button
        await actions.mouseUp().perform();
    }
    async clickElement(xpathtoclick: any) {
        await this.WaitforElementClickable(xpathtoclick);
        await xpathtoclick.click();
    }
    replaceXpath(commonxpath: any, replaceElement: any): any {
        // console.log("xpath..." + commonxpath.replace('{data}', replaceElement));
        const xpath: ElementFinder = element(by.xpath(commonxpath.replace('$data$', replaceElement)));
        return xpath;
    }
    replaceXpathTwo(commonxpath: any, data: any, option: any): any {
        const xpathvalid = commonxpath.replace('$data$', data).replace('$option$', option);
        // console.log("xpathvalid....." + xpathvalid)
        const xpath: ElementFinder = element(by.xpath(xpathvalid));
        return xpath;
    }
    functionforXpath(xpath: any): ElementFinder {
        console.log(xpath);
        var index = xpath.indexOf(':');
        var arr = [xpath.slice(0, index), xpath.slice(index + 1)];
        console.log(arr);
        const elementxpath: any = "element(by." + arr[0] + "(" + "\"" + arr[1] + "\"" + ")" + ")";
        console.log("element(by." + arr[0] + "(" + "\"" + arr[1] + "\"" + ")" + ")");
        const elementFinder = eval(elementxpath) as ElementFinder;
        return elementFinder;
    }
    /////////////////////////////////            05 June 2023      /////////////////////////
    sendDate(currentdate: any): any {
        this.seperator = parseInt(currentdate.match(/-?\d+/));//-4
        console.log("this.seperator.." + this.seperator);
        this.currenntdate = new Date();
        console.log("this.currenntdate...." + this.currenntdate);
        this.todaydate = this.currenntdate.getDate();//30 //2 //4
        console.log("this.todaydate.." + this.todaydate);
        this.datevalue = this.seperator + this.todaydate;
        console.log("this.datevalue...." + this.datevalue);//-4+30=26 same month //-4+2=-2 prev month //-4+4=0 same date
        this.previousdate = new Date();//2023-06-08
        this.previousdate.setDate(0);//prev month
        this.previousmonthdate = this.previousdate.getDate();//prev month last dast 31
        const monthNames: any[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const year = this.currenntdate.getFullYear();
        if (this.datevalue > 0) { //26
            const month = monthNames[this.currenntdate.getMonth()];
            this.senddate = this.datevalue;
            this.formattedDate = `${Number(this.senddate).toString().padStart(2, '0')} ${month} ${year}`;
        } else if (this.datevalue < 0) { //-2
            const month = monthNames[this.currenntdate.getMonth() - 1];
            this.modifieddate = this.datevalue + this.previousmonthdate; //-2+31=28
            this.senddate = this.modifieddate;
            this.formattedDate = `${Number(this.senddate).toString().padStart(2, '0')} ${month} ${year}`;
        } else if (this.datevalue === 0) {
            const month = monthNames[this.currenntdate.getMonth() - 1];
            this.senddate = this.previousmonthdate;
            this.formattedDate = `${Number(this.senddate).toString().padStart(2, '0')} ${month} ${year}`;
        } else {
            const month = monthNames[this.currenntdate.getMonth()];
            this.senddate = this.todaydate;
            this.formattedDate = `${Number(this.senddate).toString().padStart(2, '0')} ${month} ${year}`;
        }
        console.log(this.formattedDate);
        return this.formattedDate;
    }
    async getTEXT(xpath: any) {
        this.webelement = await xpath.getWebElement();
        return this.webelement.getText();
    }
    async getAttributeinputfield(xpath: any) {
        this.attribute = await xpath.getAttribute('value');
        return this.attribute;
    }
    ///////////////////////////////////////////   June/5/2023   ////////////////////////
    getDateValue(currentdate: any): string {
        this.seperator = parseInt(currentdate.match(/-?\d+/));//-4
        this.currenntdate = new Date();
        this.todaydate = this.currenntdate.getDate();//30 //2 //4
        this.datevalue = this.seperator + this.todaydate;
        this.previousdate = new Date();//2023-06-08
        this.previousdate.setDate(0);//prev month
        this.previousmonthdate = this.previousdate.getDate();//prev month last dast 31
        const year = this.currenntdate.getFullYear();
        if (this.datevalue > 0) { //26
            const month = this.currenntdate.getMonth() + 1;
            this.senddate = this.datevalue;
            this.formattedDate = `${Number(month).toString().padStart(2, '0')}/${Number(this.senddate).toString().padStart(2, '0')}/${year}`;
        } else if (this.datevalue < 0) { //-2
            const month = this.currenntdate.getMonth();
            this.modifieddate = this.datevalue + this.previousmonthdate; //-2+31=28
            this.senddate = this.modifieddate;
            this.formattedDate = `${Number(month).toString().padStart(2, '0')}/${Number(this.senddate).toString().padStart(2, '0')}/${year}`;
        } else if (this.datevalue === 0) {
            const month = this.currenntdate.getMonth();
            this.senddate = this.previousmonthdate;
            this.formattedDate = `${Number(month).toString().padStart(2, '0')}/${Number(this.senddate).toString().padStart(2, '0')}/${year}`;
        } else {
            const month = this.currenntdate.getMonth() + 1;
            this.senddate = this.todaydate;
            this.formattedDate = `${Number(month).toString().padStart(2, '0')}/${Number(this.senddate).toString().padStart(2, '0')}/${year}`;
        }
        return this.formattedDate;;
    }
    async isClickable(xpath: ElementFinder, data: any) {
        const presence: boolean = await xpath.isEnabled();
        console.log(presence);
        try {
            expect(presence).to.be.equal(true, data + " button" + " is not clickable at this movement");
            console.log('Assertion passed');
        } catch (error: any) {
            const message1: any = error.message.toString().split(":");
            this.CompareValues("Clickable",message1[0].trim(), "clickable");
        }

    }
    CompareValues(fieldName: string, appValue: string, featureValue: string) {
        appValue = appValue ? appValue.trim() : "";
        if (appValue == featureValue) {
            return "Comparison Result: PASS";
        } else {
            //Message[fieldName] = "Actual Result: " + appValue, "Expected Result: " + featureValue ;
            this.Message[
                fieldName
            ] = `Actual Result: ${appValue}, Expected Result: ${featureValue}`;
        }
        ////console.log('message121212 --> ', Message[fieldName] = `Actual Result: ${appValue.trim()}, Expected Result: ${featureValue}`);
    }
    expect() {
        const message = this.Message; // Store the reference to the Message object
        this.Message = {}; // Set the Message value to null
        expect(message).to.be.empty, JSON.stringify(message);
    }
    async Presence(xpath:any){
        console.log(xpath);
        let presence: any = await xpath.isPresent();
        if (presence) {
          presence = "YES";
        }
        else {
          presence = "NO"
        }
        return presence;
    }
}





