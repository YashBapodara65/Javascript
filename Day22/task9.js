let ages = [12,45,63,51,58];

let max_age = ages[0];

for(let i=0; i<ages.length; i++)
{
    if(ages[i] > max_age)
    {
        max_age = ages[i];
    }
}

console.log("The oldest age in the array is :- " +max_age);