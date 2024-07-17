const numbers = [1,2,3,4,5];

function transformArray(num)
{
    let ans = num.map((el)=>{
        if(el%2==0)
        {
            return el*el;
        }
        else
        {
            return el*el*el;
        }
    });

    return ans;

}

console.log(transformArray(numbers));