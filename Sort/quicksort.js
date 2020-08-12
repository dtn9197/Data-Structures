function partitionArray(array, startIndex = 0, endIndex = array.length - 1) {
   
    pivotValue = array[startIndex];
    pivotIndex = startIndex;
    for(var i = startIndex + 1; i <= endIndex; i++) {
        if(array[i] < pivotValue) {
            pivotIndex++;
            swap(array, i, pivotIndex);
        }
    }
    swap(array, startIndex, pivotIndex);
    
    return pivotIndex;
}

function swap(array, a, b) {
var temp = array[a];
array[a] = array[b];
array[b] = temp;

return array;

}
var array1 = [4,8,2,1,5,7,6,3];


function quickSort(array, startIndex = 0, endIndex = array.length - 1) {
    //the if conditional acts as a base case
    //if left and right index is the same, only one element left
    //so it will return the array
    if(startIndex < endIndex) {
        let pivotIndex = partitionArray(array, startIndex, endIndex);

        //left
        quickSort(array, startIndex, pivotIndex - 1 );

        //right
        quickSort(array, pivotIndex + 1, endIndex);
    }
    return array;
    

}

console.log(quickSort(array1));