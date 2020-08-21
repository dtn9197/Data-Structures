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
  function removeDuplicates2(array) {
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
 function removeDuplicates(array) {
     for(var i = 0; i < array.length; i++) {
         var outerValue = array[i];
         for(var j = 0; j < array.length; j++) {
             if(j == i)
                continue;
            if(array[j] == outerValue)
                array.splice(j,1);
         }
     }
     return array;

 }
 var array = [3,5,1,5,2,8,3,2];
 var array2 = [1,1,1,1,2,2,2,3,3,3,3,4,4,4,4,5,5,6,7,8,8,8,9]

console.log(removeDuplicates2(array));

 