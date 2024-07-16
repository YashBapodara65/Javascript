const numbers = [2,3,4,5,6,7,8,9];

let data = numbers.map((el,i)=>{
    if(i%2!=0){
        return el+el;
    }
    else
    {
        return el;
    }
});

console.log(data);