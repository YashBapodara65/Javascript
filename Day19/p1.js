let num = 30;

function isPrime(no)
{
    let count = 0;
    for(let i=1;i<=no;i++)
    {
        if(no%i==0)
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

for(let i=1;i<=num;i++)
{
    if(isPrime(i))   
    {
        console.log(i);
    }
}