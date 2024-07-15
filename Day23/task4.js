let arr = ['a','b','c','d'];

let data = arr.map((ele,i) => {
    if(ele == 'b')
    {
        return ele = 'z';
    }
    else
    {
        return ele;
    }
});

console.log(data);