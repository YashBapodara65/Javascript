const numbers = [1,2,3,4,5,6,7,8];
let sum = 0;

numbers.forEach((el,i)=>{
    if(i%2==0)
    {
        sum += el;
    }
}); 

console.log("Output : " +sum);