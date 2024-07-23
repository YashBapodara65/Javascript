let students = [
    {name : 'John', age : 20, grade : "A"},
    {name : 'Alice', age : 22, grade : "B"},
    {name : 'Bob', age : 21, grade : "C"},
];

for(let i=0; i<students.length; i++)
{
    console.log(`${students[i].name} - ${students[i].age} years old`);
}