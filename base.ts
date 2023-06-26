import { config, expect } from "chai";
import { Base } from "./BaseFunctions";
config.truncateThreshold = 0;
export class assertion {
    public array: any[];
    public x: any[];
    public phno: any = "2125";
    public pno: any;
    public name: any = "CCMR";
    public email: any = "@mindoula.com";
    public randomnumber = Math.floor(Math.random() * Math.pow(10, 8)).toString();
    public number: any = this.phno + this.randomnumber;
    public search: any;
    constructor() {
        this.array = [];
        this.x = [];
        this.search = "";
    }
    public callNullArray() {
        this.ifnullArray(this.array);
    }
    public ifnullArray(array: any[]) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] != ' ') {
                this.x.push(array[i]);
            }
        }
        this.expectfun(this.x);
    }
    public expectfun(array: any[]) {
        expect(array).to.be.empty, JSON.stringify(array);
    }
    public compare(actual: string, expect: string): string {
        if (actual !== expect) {
            return "Actual is " + actual + " and Expected is " + expect;
        }
        else {
            return " ";
        }
    }
    public arrayValues(actual: string, expect: string) {
        this.array.push(this.compare(actual, expect));
    }
    public phnumber() {
        console.log(this.number);
        this.number;
        return this.number;
    }
    public Mail() {
        let mail = Math.floor(Math.random() * 1000);
        let name = "ABC";
        console.log("name + mail.toString() + this.number + this.email.." + name + mail.toString() + this.number + this.email)
        return name + mail.toString() + this.number + this.email;
    }
    public name1() {
        let name2 = Math.floor(Math.random() * 1000);
        this.search = this.name + this.phno + name2.toString();
        return this.name + this.phno + name2.toString();
    }
}
const obj = new assertion();
obj.phnumber();
obj.Mail();