var array = [45,32,16,22,5,62]
var array2 = [1,2,3,4,5,6];
function bubleSort(array) {
    var outer = array.length;
    
    for(outer; outer > 0; outer--) {
        //flag for optimzation
        var noSwap = true;
        for(var inner = 0; inner <  outer; inner++) {
            if(array[inner] > array[inner + 1]) {
                swap(array, inner, inner + 1);
                noSwap = false;
            }
        }
    
        //if no swap has been made, its already sorted, break out of loop
        if(noSwap)
            break;
    }

    return array;
}

function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}

console.log(bubleSort(array));

document