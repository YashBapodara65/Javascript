let i;
let j;
let a;

for(i=1;i<=5;i++)
{
    for(j=1;j<=5;j++)
    {
        if((i == 1 || i == 5) && (j == 1 || j == 5))
        {
            a = "*****";
        }
        else
        {
            a = "*   *"
        }
    }
    console.log(a);
}