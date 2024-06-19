let x = 5;
let y = 10;

console.log("Before swap value of x is :- " +x);
console.log("Before swap value of y is :- " +y);

x = x + y;
y = x - y;
x = x - y;

console.log("After swap value of x is :- " +x);
console.log("After swap value of y is :- " +y);