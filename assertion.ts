
import { config, expect } from "chai";
import { clear } from "console";
import { ElementFinder, ExpectedConditions, browser, by, element } from "protractor";
config.truncateThreshold = 0;
export async function compare(actual: string, expect: string): Promise<string> {
    if (actual !== expect) {
        return "Actual is " + actual + " and Expected is " + expect;
    }
    else {
        return " ";
    }
}
export async function expectfun(array: any[]) {
    expect(array).to.be.empty, JSON.stringify(array);
}
let x: any[] = [];
export async function ifnullArray(array: any[]) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] != ' ') {
            x.push(array[i]);
        }
    }
    await expectfun(x);
}
//arrayvalues
let array: any[] = [];
export async function arrayValues(actual: string, expect: string) {
    array.push(await compare(actual, expect));

}
//callnullarray
export async function callNullArray() {
    await ifnullArray(array);
    array = [];
}
///////////////////////////////////////************//expectedconditions***************///////////////////////////////// */
export async function expectedCondition(parm: any) {
    await browser.wait(ExpectedConditions.elementToBeClickable(parm), 10000);
}
/////////////////////////////////replacexpath////////////////////////////////////////////////////
export function replaceXpath(commonxpath: any, replaceElement: any): any {
    const xpath: ElementFinder = element(by.xpath(commonxpath.replace('{data}', replaceElement)));
    return xpath;
}
export function replaceXpathTwo(commonxpath: any, data: any, data2: any): any {
    const xpathvalid=commonxpath.replace('{data}',data).replace('{option}',data2);
    console.log("xpathvalid....."+xpathvalid)
    const xpath: ElementFinder = element(by.xpath(xpathvalid));
    return xpath;
}
// const screenShot = await browser.takeScreenshot();
//   this.attach(screenShot, "image/png");
// const xpath: ElementFinder = element(by.xpath(commonxpath.replace('{data}', data).replace('{option}', option)));
