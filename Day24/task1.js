const numbers = [2,5,12,15,7,20];

let data_filter = numbers.filter((el)=>{
    return el >= 10;
});

let data_map = data_filter.map((el)=>{
    return el*el;
});

data_map.forEach((el)=>{
    console.log(el);
});