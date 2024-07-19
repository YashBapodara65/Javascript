let arr = [1,2,3,4,5];

let ans = arr.filter((el)=>{
    if(el%2==0)
    {
        return el;
    }
});

console.log(ans);