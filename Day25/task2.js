const numbers = [1,2,3,4,5,6];

function filterEvenNumbers(num)
{
    let ans = num.filter((el)=>{
        if(el%2==0)
        {
            return el;
        }
    });

    return ans;
}

console.log(filterEvenNumbers(numbers));