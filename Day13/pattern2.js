let num = 21;

for(let i=1; i<=num; i++)
    {
        let a = "";
        for(let j=1;j<=num;j++)
        {
            if(i == 1 || j == num || i == num || j == 1 || i == j || i + j == num + 1)
            {
                a += "* ";
            }
            else
            {
                a += "  ";
            }
        }
        console.log(a);
    }