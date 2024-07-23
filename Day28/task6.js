let cars = [
    {brand : 'Toyota', model : "Corolla", year : "2022"},
    {brand : 'Honda', model : "Civic", year : "2021"},
    {brand : 'Ford', model : "Fusion", year : "2020"}
];

let data = "";

for(let i=0; i<cars.length; i++)
{
    if(cars[i].year > 2020)
    {
        if(i == 0)
        {
            data += cars[i].brand;
        }
        else
        {
            data += ", " + cars[i].brand;
        }
    }
}

console.log(data);