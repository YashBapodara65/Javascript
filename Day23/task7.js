let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let data = arr.map((ele,i) => {
    if(checkPrime(ele) == true)
    { 
        return ele;
    }
    else
    {
        return 0;
    }
});

console.log(data);

function checkPrime(no)
{
    let count = 0;
    for(let i=0; i<=no; i++)
    {
        if(no%i == 0)
        {
            count++;
        }
    }

    if(count == 2)
    {
        return true;
    }
    else
    {
        return false;
    }

}