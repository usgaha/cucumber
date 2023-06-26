import { randomInt } from "crypto";
let phno = 2125;
let email = "@NBMRmail.com";
let count1: any = 10000;
export async function countname(lastname: string): Promise<string> {
    count1++;
    return lastname + count1;
}
export async function phnoFun() {
    const min = 100000; // Minimum 7-digit number (inclusive)
    const max = 999999; // Maximum 7-digit number (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return phno + randomNumber.toString();
}
export async function emailFun() {
    let main = randomInt(200);
    let count = randomInt(9999);
    let word = "Apple";
    let mail = word + main;
    return mail + count + email;
}