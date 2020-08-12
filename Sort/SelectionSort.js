// LEGACY VERSION (non ES2015 syntax)
function selectionSort(arr) {
    for(var i = 0; i < arr.length; i++){
        var smallestIndex = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[smallestIndex]){
                smallestIndex = j;
            }
        }
        //optional check to see if an iteration is sorted
        if(i !== smallestIndex){
            //SWAP!
            swap(arr, i, smallestIndex)
        }
    }
    return arr;
}

// ES2015 VERSION
function selectionSort2(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallestIndex] > arr[j]) {
        smallestIndex = j;
      }
    }
    if (i !== smallestIndex) swap(arr, i, smallestIndex);
  }

  return arr;
}

function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}

console.log(selectionSort([0,2,34,22,10,19,17]));
