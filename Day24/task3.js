const numbers = [5,10,15,20,25,30,35,40];

let data = numbers.filter((el,i)=>{
    if(i%2!=0)
    {
        return el;
    }
});

console.log(data);