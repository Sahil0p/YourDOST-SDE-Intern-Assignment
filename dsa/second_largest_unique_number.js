function secondLargestUnique(arr) 
{
    let first = -Infinity, second = -Infinity;
    const new_arr = new Set();

    for (const num of arr) {
        if (new_arr.has(num)) continue;
        new_arr.add(num);

        if (num > first) {
            second = first;
            first = num;
        } 
        else if (num > second && num < first) {
            second = num;
        }
    }

    if (second === -Infinity) {
        return -1;
    } 
    else{
        return second;
    }
}

console.log(secondLargestUnique([3,5,2,5,6,6,1])); 
console.log(secondLargestUnique([7, 7, 7]));
console.log(secondLargestUnique([1]));
console.log(secondLargestUnique([10, 5, 10]));
console.log(secondLargestUnique([1, 3]));
console.log(secondLargestUnique([]));