let employees = [
    {name : 'John', position : "Manager", salary : "65000"},
    {name : 'Alice', position : "Developer", salary : "55000"},
    {name : 'Bob', position : "Designer", salary : "70000"}
];

for(let i=0; i<employees.length; i++)
{
    if(employees[i].salary > 60000)
    {
        console.log(employees[i].name);
    }
}