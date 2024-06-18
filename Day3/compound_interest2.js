let principal = 3000;
let rate = 8;
let time = 4;
let periodPerYear = 2;

let amount = principal * ((1 + (rate / 100)) ** (time * periodPerYear));
let interest = (amount - principal) / periodPerYear;

console.log("compound interest is :- $" +interest.toFixed(2));