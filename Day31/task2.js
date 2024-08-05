function checkValue(val){
    if((val>='A' && val<='Z') || (val>='a' && val<='z'))
    {
        throw new Error(val +" is not a number...!");
    }
    else if(val<0)
    {
        throw new Error(val +" is a negative number...!");
    }
    return val;
}

try{
    console.log(checkValue('a'));
    // console.log(checkValue(12));
    // console.log(checkValue(-12));
}
catch(err){
    console.log(err);
}
finally{
    console.log("Program completed...!");
}