//write a function that takes an array, a target number, and return indices of two numbers such taht they add up to a specific target
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

/*logic
create array
for each value in array
  for value at i through array
    if value[i] + value[i + 1] = target
      return these indexes
*/

function twoSum(array, target) {
    for (var i = 0; i < array.length; i++) {
      for (j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] == target) {
          return [array[i], array[j]];  
        }
      }
    }
  }
  
  var testArray = [3,2,7,1,3,4,3,6];
  var targetNumber = 6;
  twoSum(testArray, targetNumber);





  /**different ways of solving */
  // Naive
function hasPairWithSum(arr, sum){
  var len = arr.length;
  for(var i =0; i<len-1; i++){
     for(var j = i+1;j<len; j++){
        if (arr[i] + arr[j] === sum)
            return true;
     }
  }

  return false;
}

// Better
function hasPairWithSum2(arr, sum){
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++){
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

//O(n) - time
//O(1) - space
//uses multiple pointers pattern
//require array to be sorted
function sumZero(array, target) {
  let left = 0;
  let right = array.length - 1;
  //always use <, using <= will result in false positive
  while(left < right) {
    let sum = array[left] + array[right];
    if(sum === target) {
      return [array[left], array[right]];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
}



// console.log(twoSum([6,4,3,2,1,7], 9))
console.log(sumZero([-3,-2,-1,4,6,7], 0));
