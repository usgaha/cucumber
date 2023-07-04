import { ElementFinder, by, element } from "protractor";

export class commonXpaths {
    divtext="//div[contains(text(),'$data$')]";
    leftnav="//mmr-vertical-nav//a//span[contains(.,'$data$')]";
    spantext="//span[contains(text(),'$data$')]";
    buttonspan="//button//span[contains(text(),'$data$')]";
    avatar:ElementFinder=element(by.xpath("//uic-avatar[contains(@class,'avatar uic-avatar')]"));
    avatarcontains="//uic-avatar[contains(@class,'avatar uic-avatar')][contains(.,'$data$')]";
    inputformcontrol="//input[contains(@formcontrolname,'$data$')]";
    mmrselect="//mmr-single-select[contains(.,'$data$')]";
    matoption="//mat-option//span[contains(text(),'$data$')]";
    checkbox="//span[contains(@class,'checkbox')][contains(.,'$data$')]";
    submit:ElementFinder=element(by.xpath("//uic-button[contains(@id,'submit')]"));
    textAreaFormcontrol="//textarea[contains(@formcontrolname,'$data$')]";
    input="//input[contains(@formcontrolname,'$data$')]";
    uicicon="//uic-icons[contains(@icon,'$data$')]";
    openCalender:ElementFinder=element(by.xpath("//mat-datepicker-toggle[contains(@class,'mat-datepicker-toggle')]"));
    datecell="//td[contains(@role,'gridcell')][contains(.,'$data$')]";
    previousmontharrow:ElementFinder=element(by.xpath("//button[contains(@aria-label,'Previous month')]"));
    currentDate:ElementFinder=element(by.xpath("//div[contains(@class,'mat-focus-indicator mat-calendar-body-selected')]"));
    inputtype="//input[contains(@type,'$data$')]";

}