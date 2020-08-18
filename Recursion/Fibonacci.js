//write a function that return the value at nth entry in the fibonacci sequence

function fib(index) {
    //create array to hold fibonacci numbers starting with 0 and 1
    //loop through from 2 to <= index
    //calculate result at index i by adding the previous two results
    //add the result into the fibonacci array
    //return the fibonacci at index
    if(index <= 2) return 1;
    var fibNums = [0, 1, 1];
    for (var i = 3; i <= index; i++) {
       fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[index];
}

//O(2^n) approach, bad
function fibRecursive(n) {
  if (n <= 2) return 1;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// A dynanic programming approach using memoization
// a lot more faster
// the memo array could be stored outside the recursive function calls
// so they retain data after the operations is done
function fibRecursive2(n, memo=[]) {
  if(memo[n] !== undefined) return memo[n];
  if(n <= 2) return 1;
  var res = fibRecursive2(n-1, memo) + fibRecursive2(n-2, memo);
  memo[n] = res;
  return res;
}

  
  var index = 2;
  console.log(fibonacci(index));
  