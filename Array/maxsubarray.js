/** write a function called maxSubArraySum which accepts
 * an array of integers and a number called n
 * the function should calculate the maximum sum of n
 * conseutive elements in the array
 * 
 * variables of interests:
 * num - consecutive elements
 * tempsum - temporary range sum of subset
 * maxsum - highest sum of consecutive elements out of all temp sums
*/


//inefficient, loop solution
//O(n^2)
/**
 * this method creates a subarray (the window) which sums up the consecutive numbers
 * in each iteration, the window is then moved up one position at a time and a new sum is calculated
 * the new sum (temp) is then compared against a max variable to determine the largest sum of consecutive elements
 */
function maxSubarraySum(array, num) {
    if ( num > array.length){
      return null;
    }
   
    //use negative infitiy to account for negative number set
    var max = -Infinity;
    for (let i = 0; i < array.length - num + 1; i ++){
      temp = 0;
      //sum the sub array
      for (let j = 0; j < num; j++){
        temp += array[i + j];
      }
      //readjust max
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }

/** 
 * This pattern still uses a window
 * for each iteration, the window subtracts the first lower window index and add the new upper window index
 */
//uses sliding window pattern
//O(n)
  function maxSubarraySum2(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    //calculate the initial range
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    //assign initial range to subset range
    tempSum = maxSum;
    //start looping at the next upper window index
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      if(tempSum > maxSum)
        maxSum = tempSum;
    //   maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
  console.log(maxSubarraySum2([2,6,9,2,1,8,5,6,3],3))
  
  
//   console.log(maxSubarraySum([5,1,3,9,7],3))
  
  
  