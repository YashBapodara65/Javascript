let scores = [88,59,67,75,66];
let sum = 0;
let avg = 0;

for(let i=0; i<scores.length; i++)
{
    sum += scores[i];
}

avg = (sum / (scores.length)).toFixed(2);

console.log("Sum is :- " +sum);
console.log("Average is :- " +avg);