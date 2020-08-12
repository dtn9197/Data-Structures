/**Algorithm
 * create lowerbound
 * create upperbound
 * while( lower <= upper)
 *     create mid = (lower + upper) / 2
 *     if value at mid = target
 *          found
 *     if value at mid < target
 *          move lower up 1 after mid
 *     else 
 *          move upper down 1 after mid
 */

function binarySearch(array, target) {
    var left = 0;
    var right = array.length - 1;
    while(left <= right) {
        // mid = left + ((right - left) / 2);
        mid = Math.floor((left + right) / 2);
        if(array[mid] == target) {
           return array[mid];
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
            
        }
    }
    return false



}

var array = [1,2,3,4,5,6,7,52,67,89];

console.log(binarySearch(array, 67));
console.log(binarySearch(array, 2));
console.log(binarySearch(array, 3));
console.log(binarySearch(array, 4));
console.log(binarySearch(array, 5));
console.log(binarySearch(array, 6));
console.log(binarySearch(array, 7));
console.log(binarySearch(array, -5));
