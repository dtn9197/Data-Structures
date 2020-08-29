/**write a function that removes duplicates from an array
 * input = [3,5,1,5,2,8,3,2]
 * output = [3,5,1,2,8]
 * ]
 */

 /**Algorithm
  * for each item in array
  *     if (does not exist in hash)
  *         add to hash
  *         push it to results array
  * return array
  */
  function removeDuplicates(array) {
      var hash = {};
      var results = [];
      for(var i = 0; i < array.length; i++) {
          if(!hash[array[i]]) {
            hash[array[i]] = 1;
            results.push(array[i]);
          }
           
      }
      return results;
      
  }
 

/**the index in the while loop only moves up if no array is removed */
function removeDuplicates2(array) {
    for(var i = 0; i < array.length; i++) {
        var outerValue = array[i];
        var innerIndex = 0;
        while(innerIndex < array.length) {
            if(innerIndex === i) {
                innerIndex++;
                continue;
            }
            if(array[innerIndex] === array[i])
                array.splice(innerIndex, 1)
            else 
                innerIndex++;
            
        }
    }
    return array;

}

