const numbers = [1,2,-3,4,-5];

numbers.in

function findIndexOfFirstNegative(nums)
{

    const index = nums.indexOf(nums.find(num => num < 0));
    return index !== -1 ? index : -1;

}

console.log(findIndexOfFirstNegative(numbers));