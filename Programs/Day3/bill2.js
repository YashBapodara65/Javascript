let purchase = 300;
let tax = 10;
let delivery_fee = 15;
let discount = 50;

purchase -= discount;

let bill = purchase + delivery_fee + ((purchase * tax) / 100);

console.log("Total bill amount :- $" +bill);