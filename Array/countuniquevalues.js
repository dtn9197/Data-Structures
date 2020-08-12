/**implement a function called countUniqueValues
 * which accepts a sorted array, and counts the unique valies in the array.
 * There can be negative numbers in the array, but it will always be sorted.
 */

 function countUniqueValues(array) {
     var uniqueArray = [];
     for(var i = 0; i < array.length; i++) {
         if(!uniqueArray.includes(array[i]))
            uniqueArray.push(array[i]);
     }

     return uniqueArray.length;
 }

 //this solution only works with sorted array
 //uses multiple pointers pattern
 //O(n) time
 /**
  * the algorithm works by looping through the original array and replacing them
  * with unique values by using an index i
  * at the end of the array, we return only the portion of the array that has unique values
  * which is controlled by index i
  */
 function countUniqueValues2(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
// countUniqueValues([1,2,2,5,7,7,99])

 

 console.log(countUniqueValues2([1,2,3,4,4,3,2,4,1,5]));