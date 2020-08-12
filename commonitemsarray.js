/*given 2 arrays, create a function that let
a user knows true/false whether these 2 arrays contain any
common items

array1 = ["a","b","c","x"];
array2 = ["z,"y",i"];
should return false
------------
array 1 = ["a","b","c","x"];
array 2 = ["z", "y", "x"];
should return true
*/

const array1 = ["a","b","c","x"];
const array2 = ["z","y","a"];

function containsCommonItem(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                return true;
            }
        }
    }

    return false
}
//O(a * b)
//O(1) space


console.log(containsCommonItem(array1,array2));


//another way to solve it
/* array1 ==> obj {
    a: true,
    b: true,
    c: true,
    x: true
}
array2[index] === obj.properties

*/

function containsCommonItem2(arr1, arr2) {
//loop through first array and create object 
//where properties === items in the array
//loop through second array and check if item in second array exists on created object.

    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if(!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }

    for(let j = 0; j < arr2.length; j++) {
        if(map[arr2[j]]) {
            return true;
        }
    }
    return false;
}

//O(a + b)
//O(a) space
// containsCommonItem2(array1,array2);

function containsCommonItem3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}

containsCommonItem3(array1, array2);