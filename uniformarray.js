//write a function isUniformed() which takes an array as an argument
//and returns true if all elements in the array are identical

function isUniformed(array) {
    //stores first value of array
    //loop through every element in array
    //if 1st value not equals compared value
         //return false
    //return true
  
    var testValue = array[0];
    for (var i = 0; i < array.length; i++) {
      if (testValue != array[i]) return false;
    }
    return true;
  }
  var array1 = [1, 2, 3];
  var array2 = [1, 1, 1];
  console.log(isUniformed(array1));
  