/**Write a function named recursiveRange which accepts a number and adds up all the numbers from 0
 * to the number passed to the function
 * recursiveRange(6) // 21
 */

function recursiveRange(num) {
    if(num === 1)
        return 1;
    let result = num + recursiveRange(num - 1);
    return result;
}

console.log(recursiveRange(6));