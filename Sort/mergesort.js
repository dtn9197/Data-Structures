
function merge2(arrayA, arrayB) {
    var aIndex = 0
    var bIndex = 0
    var cIndex = 0;
    var arrayC = [];

    //check input
    if(arrayA.length == 0)
        return arrayB;
    if(arrayB.length == 0)
        return arrayA;
        
    //check to make sure both arrays have enough numbers aIndex greater than array.length
    //means one of them is out of bound
    while (aIndex < arrayA.length && bIndex < arrayB.length) {
        if(arrayA[aIndex] < arrayB[bIndex]) 
            arrayC[cIndex++] = arrayA[aIndex++];
        else 
            arrayC[cIndex++] = arrayB[bIndex++];
    }

    while(aIndex < arrayA.length) 
        arrayC[cIndex++] = arrayA[aIndex++]
       
    while(bIndex < arrayB.length) 
        arrayC[cIndex++] = arrayB[bIndex++]
       

    return arrayC;
}


// Merge function from earlier
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([10,24,76,73]));
var array1 = [2,4,6,7];
var array2 = [5,9,11,12];


