let arr = ['apple','banana','pear','abc'];

let ans = arr.filter((el)=>{
    if(el.length > 3)
    {
        return el;
    }
});

console.log(ans);