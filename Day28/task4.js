let cars = [
    {brand : 'Toyota', model : "Corolla", year : "2022"},
    {brand : 'Honda', model : "Civic", year : "2021"},
    {brand : 'Ford', model : "Fusion", year : "2020"}
];

for(let i=0; i<cars.length; i++)
{
    console.log(`Brand : ${cars[i].brand}, model : ${cars[i].model}`);
}