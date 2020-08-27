/**write a function which takes in array of numbers 
 * and return the product of them all
 * productOfArray([1,2,3,4]) // 24
 */

 /**f(3) = val(3) * productArray(2) */

 /**outerFunction(array) {
  * index = array.length - 1
  * results = array[index] * helper(array)
  * 
  * } */


  /**helper(array) {
   * index--;
   * if(index === 0)
   *    return array[index];
   * 
   * results = array[index] * helper(array)
   * 
   * } */
 function productOfArray(array) {
    let index = array.length - 1;
    let results = array[index] * helper(array);
    return results;

    function helper(array) {
        index--;
        if(index === 0)
            return array[index];
        
        let results = array[index] * helper(array);
        return results;
    }
 }

 console.log(productOfArray([5,2,3,6]));

 