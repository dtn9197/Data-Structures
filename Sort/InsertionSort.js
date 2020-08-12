function insertionSort(array) {
    for(var outer = 1; outer < array.length; outer++) {
        // create value at outer
        var outerValue = array[outer];
        //create inner index
        inner = outer - 1;

       
        while(inner >= 0 && array[inner] > outerValue) {
            array[inner + 1] = array[inner];
            inner--;
        }

        array[inner + 1] = outerValue;
        console.log(array);
    }

    return array;
}

function insertionSort2(array) {
    for(var outer = 1; outer < array.length; outer++) {
        inner = outer - 1;
        while(inner >= 0 && array[inner] > array[outer]) {
            var temp =
            array[inner + 1] = array[inner];
            inner--;
        }

        array[inner + 1] = outerValue;
        console.log(array);
    }

    return array;
}





var array1 = [5,4,3,2,1];
var array2 = [5,8,2,3,9];
console.log(insertionSort(array1));