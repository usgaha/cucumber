// import { Then } from "@cucumber/cucumber";
// import { browser } from "protractor";
// import { Base } from "../pages/BaseFunctions";
// import { consultpage } from "../pages/consultpage";
// const obj = new Base();
// var consult = new consultpage();
// Then('verify consults data in empty consults page', async function (dataTable) {
//     var data = dataTable.rowsHash();
//     const dataraw: any[][] = dataTable.raw();
//     for (let i = 0; i < 3; i += 1) {
//         const text: any = await obj.getTEXT(await obj.replaceXpath(consult.headerinedit, dataraw[i][1]));
//         obj.compareValues(text, dataraw[i][1]);
//     }
//     const status: any = await obj.getTEXT(consult.statusvalue);
//     obj.compareValues(status, data.status);
//     for (let i = 4; i < 6; i += 1) {
//         const buttontext: any = await obj.getTEXT(await obj.replaceXpath(consult.button, dataraw[i][1]));
//         obj.compareValues(buttontext, dataraw[i][1]);
//     }
//     await obj.isClickable(await obj.replaceXpath(consult.button, data.publish_button_is_clickable), data.publish_button_is_clickable);
//     const dropdownheading: any = await obj.getTEXT(await obj.replaceXpath(consult.matform, data.dropdown_field_heading));
//     obj.compareValues(dropdownheading, data.dropdown_field_heading);
//     const option: any = await obj.getTEXT(consult.matselectvalue);
//     obj.compareValues(option, data.dropdown_option_text);
//     for (let i = 9; i < 11; i += 1) {
//         const text: any = await obj.getTEXT(await obj.replaceXpath(consult.button, dataraw[i][1]));
//         obj.compareValues(text, dataraw[i][1]);
//     }
//     for (let i = 11; i < 13; i += 1) {
//         let data1: any = dataraw[i][1].split(".");
//         let text: any = await obj.getTEXT(await obj.replaceXpath(consult.emptycontainer, data1[0]));
//         obj.compareValues(text, dataraw[i][1]);
//     }
//     for (let i = 13; i < 18; i += 1) {
//         const text: any = await obj.getTEXT(await obj.replaceXpath(consult.heading, dataraw[i][1]));
//         obj.compareValues(text, dataraw[i][1]);
//     }
//     for (let i = 18; i < 23; i += 1) {
//         let extracttext: any = await dataraw[i][0].replaceAll("_empty_note_text", "").replaceAll("_", " ");
//         const text: any = await obj.replaceXpath(consult.notes, extracttext).getAttribute('data-placeholder');
//         obj.compareValues(text, dataraw[i][1]);
//     }
//     const buttontext: any = await obj.getTEXT(await obj.replaceXpath(consult.divbutton, data.button_text_in_acknowledgement_field));
//     obj.compareValues(buttontext, data.button_text_in_acknowledgement_field);
//     await obj.clickElement(await obj.replaceXpath(consult.divbutton, data.click_on_show_message));
//     const textinsidecontainer: any = await obj.getTEXT(consult.acknowledge);
//     obj.compareValues(textinsidecontainer, data.text_in_acknowledgement_field_after_click_of_show_message);
//     obj.expectfun();
//     const screenShot = await browser.takeScreenshot();
//     this.attach(screenShot, "image/png");
// });