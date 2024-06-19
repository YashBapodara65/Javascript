let purchase = 250;
let tax = 8;
let service_fee = 20;
let discount = 30;

purchase -= discount;   

let bill = purchase + service_fee + ((purchase * tax) / 100);

console.log("Total bill amount :- $" +bill);