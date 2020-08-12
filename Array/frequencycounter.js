/** 
 * write a function called same, which accepts two arrays
 * function should return true if every value in the array
 * has its corresponding value squared in the second array
 * .The frequency of values must be the same
 * same([1,2,3] , [4,1,9]) //true
 * same([1,2,3], [1,9]) //false
 * same([1,2,1], [4,4,1]) //false
*/


//inefficient solution
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        //remove the corresponding value in array 2 so that the same value cannot be counted twice
        arr2.splice(correctIndex,1)
    }
    return true;
}
//more efficient solution using object
/**
 * create object1 and object2
 * for each val in array1
 *      if object1[val] exists
 *          object1[val]++;
 *      else
 *      object1[val] = 1
 * for each val in array2
 *      if object2[val] exists
 *          object2[val]++;
 *      else
 *      object2[val] = 1
 * for each key in object1
 *      if(key1 is not in object2)
 *          flag false
 *      if(value of key1 is not equal to corresponding value in key2)
 *  
 * return true
 *      
 */
function same2(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

// console.log(same([1,2,3,2,5], [9,1,4,4,22]));


// console.log(same2([1,2,3,2], [9,1,4,4]))

console.log(same([1,2,3,4], [4,1,9,16]))

