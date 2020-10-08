/**implement a function called areThereDuplicates, which accepts a variable number of arguments, and check whether there are any duplicates
 * among the arguments passed in. You can solve this using the frequency Counter Pattern or the Multiple Pointer pattern
 * areThereDuplicates(1,2,3) // false
 * areThereDuplicates(1,2,2) // true
 * areThereDuplicates("a","b","c","a") // true
 */
function areThereDuplicates() {
    // good luck. (supply any arguments you deem necessary.)
}


/**this uses frequency counter pattern
 * Time: O(n)
 * Space: O(n)
 * initialize hashSet
 * for each value in argument
 *    if(value doesn't exist in hash)
 *      set hash[value] = 1;
 *    else
 *      increment hash[value] by 1;
 * for each key in hash
 *      if(key's value greater than 1)
 *          return true;
 * return false
 */
function areThereDuplicates() {
    let collection = {}
    for(let index in arguments){
    //collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
        let value = arguments[index];
        if(collection[value] === undefined)
            collection[value] = 1;
        else
            collection[value] += 1;
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
}

/**use the multiple pointer pattern
 * Time: O(nlogn)
 * Space: 1
 */
function areThereDuplicates(...args) {
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++;
      next++;
    }
    return false
  }

console.log(areThereDuplicates());