let purchase = 500;
let tax = 12;
let tip = 18;
let service_charge = 25;
let voucher = 50;

purchase -= voucher;

let bill = purchase + service_charge + ((purchase * (tax + tip)) / 100);

console.log("Total bill amount :- $" +bill);