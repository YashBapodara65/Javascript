const numbers = [2,3,4];

function doubleAndAddIndex(num)
{
    let ans = num.map((el,i) => {
        return (el*2) + i;
    });

    return ans;

}

console.log(doubleAndAddIndex(numbers));