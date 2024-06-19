let principal = 5000;
let rate = 6;
let time = 3;

let amount = principal * (1 + rate / 100) ** time;
let interest = amount - principal;

console.log("compound interest is :- $" +interest.toFixed(2));