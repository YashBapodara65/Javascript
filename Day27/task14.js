let car = {
    "brand" : "Toyota", 
    "model" : "Corolla", 
    "year" : 2022,
};

for(let k in car)
{
    console.log(`${k} : ${car[k]}`);
}