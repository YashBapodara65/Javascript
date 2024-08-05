function checkNumber(num){
    if(num<0)
    {
        throw new Error("Negative number...!");
    }
    return num;
}

try{
    console.log(checkNumber(-1));
}
catch(err){
    console.log(err);
}
finally{
    console.log("Program completed...!");
}