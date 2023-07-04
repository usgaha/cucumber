import { ElementFinder, by, element } from "protractor";

export class trade {
    inputtype="//input[contains(@type,'$data$')]";
    submit:ElementFinder=element(by.xpath("//button[contains(@type,'submit')]"));
    tradetab="//div//span[contains(.,'$data$')][@class='nice-name']";
    more:ElementFinder=element(by.xpath("//button[contains(@data-balloon,'More')]"));
    spantext="//span[contains(text(),'$data$')]";
}