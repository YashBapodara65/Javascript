let principal = 7000;
let rate = 5;
let time = 2;

let amount = principal * (1 + rate / 100) ** time;
let interest = amount - principal;

console.log("compound interest is :- $" +interest.toFixed(2));