let cost = 200;
let tip = 15;
let tax = 25;
let service_charge = 20;
let bill_amount = cost + service_charge + ((cost * (tip + tax)) / 100);

// console.log("Total bill amount including tip :- $",bill_amount);
console.log("Total bill amount :- $"+bill_amount);