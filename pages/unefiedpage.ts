import { ElementFinder, by, element } from "protractor";

export class unefied {
    closeleftnav: ElementFinder = element(by.xpath("//button[@aria-label='Menu width toggle']"));
    addlink = "//div[contains(@class,'group')][contains(.,'$data$')]//child::div//button[contains(.,'+ Add')]";
    menuitems = "//div[contains(@class,'item-link-name text')][contains(.,'$data$')]";
    quickadd = "//div[contains(@class,'mat-menu')]//span[contains(.,'$data$')]"
    tab = "//div[contains(@role,'tab')]//div[contains(.,'$data$')][contains(@class,'content')]";
    uicicon = "//uic-icons[contains(@icon,'$data$')]";
    addphnumber = "//mmr-phone[contains(.,'+ Add Phone Number')]";
    addcontacts = "//main//div[contains(.,'$data$')]";
    checkboxes = "//span[contains(.,'$data$')]";
    popupsave:ElementFinder=element(by.xpath("//div[contains(@class,'flex justify')]//uic-button//span[contains(text(),'Save')]"));
    header="//header[contains(.,'$data$')]";
    close = "//div[contains(@mattooltip,'Close')]";
    closequickadd:ElementFinder=element(by.xpath("//div[contains(@class,'cdk-overlay-backdrop-showing')]"));
    matform = "//mat-form-field//span[contains(.,'Delivery Location')]";
    viewall: ElementFinder = element(by.xpath("//span[contains(.,'View All')]"));
    menuitem: ElementFinder = element(by.xpath("//div[contains(@class,'item-link-name text')][contains(.,'$data$')]"));
    leftnavitem: ElementFinder = element(by.xpath("//span[contains(.,'$data$')]"));
    tabinviewall = "//div[contains(@class,'mat-menu')]//a[contains(.,'$data$')]"
    inputFormcontrolname = "//input[contains(@formcontrolname,'$data$')]";
    spancontains = "//span[contains(text(),'$data$')]";
    carot: ElementFinder = element(by.xpath("//uic-button//span//uic-icons[contains(@icon,'carrot-down')]"));
    phoneicons = "//span[contains(@class,'trigger-popInOut')]//uic-icons[contains(@icon,'$data$')]";
    assignce = "//mmr-assign-ce//span[contains(.,'$data$')]";
    uicedit = "//mmr-assign-ce//span[contains(@class,'text')][contains(.,'$data$')]//following-sibling::uic-icons[contains(@icon,'edit-circle')]";
    iconengagementrequest = "//mmr-engagement-request-header-icon[contains(@mattooltip,'$data$')]"
    maticon = "//mmr-engagement-request-header-icon[contains(@mattooltip,'$data$')]";
    iconCount: ElementFinder = element(by.xpath("//uic-icons[contains(@icon,'engagement-requests')]//following-sibling::div[contains(@class,'badge-pill badge-danger')]"));
    tooltiptext: ElementFinder = element(by.xpath("//mat-tooltip-component//div[contains(@class,'mat-tooltip mat-tooltip-show')]"));
    lefttnavitem = "//a//child::span[contains(.,'$data$')]";
    matselect = "//mmr-single-select[contains(.,'$data$')]";
    selectpalceholder = "//mat-select[contains(@placeholder,'$data$')]";
    addressselect = "//mmr-address-confirmation//div[contains(text(),'$data$')]";
    span = "//span[contains(.,'$data$')]";
    submit: ElementFinder = element(by.xpath("//uic-button[contains(@id,'submit')]"));
    addprogram: ElementFinder = element(by.xpath("//mmr-programs-widget//div[contains(.,'Add Program')][contains(@class,'text-base')]"));
    save: ElementFinder = element(by.xpath("//div[contains(@class,'flex justify')]//span[contains(.,'Save')]"));
    none: ElementFinder = element(by.xpath("//span[contains(.,'None')][contains(@class,'item-link')]"));
    plus = "//span[contains(.,'$data$')]/parent::cdk-tree-node//child::button//uic-icons";
    inputdataplaceholder = "//input[contains(@data-placeholder,'$data$')]";
    programstatus = "//section[contains(.,'$data$')][contains(@class,'zone has-hover')]";
    notes: ElementFinder = element(by.xpath("//textarea[contains(@formcontrolname,'notes')]"));
    avatar: ElementFinder = element(by.xpath("//uic-avatar[contains(@class,'avatar uic-avatar')]"));
    uicavatar: ElementFinder = element(by.xpath("//uic-avatar[contains(@class,'uic-avatar')]"));
    divcontains = "//div[contains(text(),'$data$')]";
    headername: ElementFinder = element(by.xpath("//mmr-member-header-name//p[contains(@class,'text')]"));
    primarycheck: ElementFinder = element(by.xpath("//mat-checkbox[contains(@formcontrolname,'primaryTeamMember')]"));
    start = "//mmr-assessment-list-item[contains(.,'$data$')]//span[contains(text(),'Start')]";
    pins: ElementFinder = element(by.xpath("//mmr-pin-input[contains(@formcontrolname,'accessCode')]"));
    pincode = "//div[contains(@class,'mmr-pin-container')]//input[contains(@name,'$data$')]";
    memberportralbtns = "//div[contains(@class,'header-btn-container')]//p[contains(.,'$data$')]";
    headerbtnclick = "//div[contains(@class,'header-btn-container')]//p[contains(.,'$data$')]//preceding-sibling::div[contains(@class,'member-header-btn')]";
    chatmemberclick = "//div[contains(@class,'truncate')][contains(.,'$data$')]";
    inputmessage: ElementFinder = element(by.xpath("//textarea[contains(@aria-label,'Send a message…')]"));
    msgtext = "//div[contains(@class,'message__checkin')]//div[contains(text(),'$data$')]";
    detailedview: ElementFinder = element(by.xpath("//uic-icons//mat-icon[contains(@data-mat-icon-name,'density-low')]"));
    verifyname = "//div[contains(@class,'text-left')]//div[contains(.,'$data$')]";
    verifyleftcontaints = "//mmr-engagement-request-list//div[contains(.,'$data$')]//div//span[contains(.,'$option$')]"
    selectmat: ElementFinder = element(by.xpath("//mat-select[contains(@role,'combobox')]"));
    matoption = "//span[contains(@class,'mat-option-text')]//span[contains(text(),'$data$')]";
    toastmessage = "//div[contains(@aria-label,'$data$')]";
    submituicbtn: ElementFinder = element(by.xpath("//uic-button[contains(@type,'submit')]"));
    closediag: ElementFinder = element(by.xpath("//mmr-self-harm-dialog//uic-icons[contains(@icon,'x-circle')]"));
    dialogcontainer: ElementFinder = element(by.xpath("//mmr-self-harm-dialog//uic-button[contains(@mattooltip,'Close')]"));
    timeverify = "//span[contains(.,'$data$')]//following-sibling::span[contains(.,'option')]";
    button: ElementFinder = element(by.xpath("//button[contains(.,'Close Without Case Note')]"));
    search: ElementFinder = element(by.xpath("//input[contains(@aria-label,'Search Input box')]"));
    listiteem = "//mmr-assessment-list-item[contains(.,'$data$')]";
    primary="//div[contains(text(),'Primary')]//preceding-sibling::div[contains(text(),'$data$')]";
    depressionsummary: ElementFinder = element(by.xpath("//mmr-member-assessment-result-score//div[contains(@class,'result-summary')]"));
    dabba: ElementFinder = element(by.xpath("//mmr-member-assessment-result-score//div[contains(@class,'dabba-body')]"));
    totaldesc: ElementFinder = element(by.xpath("//div[contains(@class,'main-score')]//div[contains(@class,'data')]"));
    closeinengreq: ElementFinder = element(by.xpath("//div[contains(.,'Close Without Case Note')][contains(@class,'bg-snow dark:bg-charcoal-static shadow-md dark:shadow')]"));
    radioassesments = "//div[@class='question__combo-container'][contains(.,'$data$')]//following-sibling::div//child::mat-radio-group//span[contains(.,'$option$')]";
    verifymemberinengcritical = "//div[contains(.,'Assigned, Unconfirmed (MMR Casecare)')]//following-sibling::div[contains(.,'Critical')]//preceding-sibling::div[contains(.,'$data$')]";
    verifymemberwithoutcritical = "//div[contains(.,'Assigned, Unconfirmed (MMR Casecare)')]/preceding-sibling::div[contains(.,'$data$')]";
    memberprofeciency = "//div[contains(@class,'general-message')]//span[contains(.,'$data$')]//mat-select";
    verifydemographtext = "//div[contains(@class,'grid')]//div[contains(text(),'$data$')]//following-sibling::div[contains(@class,'text-base')]";
    verifyheaders = "//mat-card-title[contains(.,'$data$')]";
    viewmore = "//header[contains(.,'$data$')]//following-sibling::uic-button//uic-icons[contains(@icon,'arrow-ne-circle')]"
    popupheader = "//header[contains(@class,'header')]//h1[contains(.,'$data$')]";
    popupbtn = "//div[contains(@class,'flex justify')]//span[contains(.,'$data$')]";
    verifyheaderinquickall="//div[contains(@class,'mat-menu')]//p[contains(.,'$header$')]";
    verifybuttoninquickadd="//uic-icons[contains(@icon,'$icon$')]//following-sibling::span[contains(.,'$tabname$')]";
    verifyViewallmenuitem="//div[contains(@role,'menu')]//a[contains(.,'$tab$')][last()]";
    sectiontitle="//section//h2[contains(.,'$data$')]";


}
////div[contains(@class,'group bg-snow rounded')]//header[contains(.,'$data$')]//following-sibling::div//p[contains(.,'+ Add')]