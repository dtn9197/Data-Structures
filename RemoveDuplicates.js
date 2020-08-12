/**write a function that removes duplicates from an array
 * input = [3,5,1,5,2,8,3,2]
 * output = [3,5,1,2,8]
 * ]
 */

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
console.log(removeDuplicates(array));
console.log(removeDuplicates([2,3,2,4]));
 