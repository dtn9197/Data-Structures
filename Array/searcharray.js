/**write a function that would return true if every values in array1 has a
 * corresponding  squared value in array2
 */

 //algorithm
 //for every i in array1
    //set found to false
    //search through  array2
        //if array2[i] == target
            //found = true;
    //if(!found)
        //return false

//return true
function searchArray(array1, array2) {
    if(array1.length !== array2.length){
        return false;
    }
    for(var i = 0; i < array1.length; i++) {
        var found = false;

        for(var j = 0; j < array2.length; j++) {
            if(array2[j] == array1[i] ** 2 )
                found = true;
        }

        if (!found)
            return false;
    }

    return true;
}

console.log(searchArray([1,2,3,4], [16,4,1,9]));
