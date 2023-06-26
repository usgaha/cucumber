import { replaceXpath } from "./assertion";
import { commonPAgeXpath } from "./commonPage";

var commonpage = new commonPAgeXpath()
export class DateSelect {
    public regularEx: any;
    public datatablevalue: any;
    public modifieddate: any;
    public currentDate = new Date();
    public day: any;
    public datemodified: any;
    public date2: any;
    public monthprev: any;
    public previousdate: any;
    public date: any;
    async datesel(param: any) {
        this.regularEx = param.match(/-?\d+/);
        if (this.regularEx != null) {
            this.datatablevalue = parseInt(this.regularEx[0]);
            console.log("darec   ///" + this.datatablevalue);
            this.datepicker(this.datatablevalue);
        }else{
            this.currentdate();
        }
    }
    async datepicker(datesel: any) {
        this.currentDate = new Date();
        this.day = this.currentDate.getDate();
        this.datemodified = this.day + datesel;
        console.log("////" + this.datemodified);
        const value = this.day + this.datemodified;
        console.log("vvv" + value);
        if (this.datemodified < 0) {
            this.previousdate = new Date(this.currentDate);
            this.monthprev = this.currentDate.getMonth();
            this.previousdate.setDate(0);
            this.date2 = this.previousdate.getDate();
            console.log(this.date2);
            this.modifieddate = this.date2 + this.datemodified;
            await commonpage.openCalender.click();
            await commonpage.prevmontharrow.click();
            await replaceXpath(commonpage.datecell, this.modifieddate).click();
        } else if (this.datemodified > 0) {
            await commonpage.openCalender.click();
            await replaceXpath(commonpage.datecell, this.datemodified).click();
        } else {
            this.previousdate = new Date(this.currentDate);
            this.monthprev = this.currentDate.getMonth();
            this.previousdate.setDate(0);
            this.date2 = this.previousdate.getDate();
            await commonpage.openCalender.click();
            await commonpage.prevmontharrow.click();
            await replaceXpath(commonpage.datecell, this.date2).click();

        }

    }
    sendDate(dateindt: any): any {
        this.regularEx = dateindt.match(/-?\d+/);
        this.datatablevalue = parseInt(this.regularEx[0]);
        console.log("darec   ///" + this.datatablevalue);
        this.currentDate = new Date();
        this.day = this.currentDate.getDate();
        this.datemodified = this.day + this.datatablevalue;
        console.log("////" + this.datemodified);
        const value = this.day + this.datemodified;
        console.log("vvv" + value);
        if(this.regularEx===null){
            this.currentDate = new Date();
        this.day = this.currentDate.getDate();
        this.date=this.day;
        }
        if (this.datemodified < 0) {
            this.previousdate = new Date(this.currentDate);
            this.monthprev = this.currentDate.getMonth();
            this.previousdate.setDate(0);
            this.date2 = this.previousdate.getDate();
            console.log(this.date2);
            this.modifieddate = this.date2 + this.datemodified;
            this.date = this.modifieddate;
            console.log("<.." + this.date);
        } else if (this.datemodified > 0) {
            this.date = this.datemodified;
            console.log(">.." + this.date);
        } else {
            this.previousdate = new Date(this.currentDate);
            this.monthprev = this.currentDate.getMonth();
            this.previousdate.setDate(0);
            this.date = this.previousdate.getDate();
            console.log("same.." + this.date);
        }
        return this.date;
    }
   async currentdate(){
        this.currentDate = new Date();
        this.day = this.currentDate.getDate();
        await commonpage.openCalender.click();
        await replaceXpath(commonpage.datecell, this.day).click();

    }

}