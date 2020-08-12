/*
    write a function sumArray() that accepts an array of numbers and return the
    sum of all numbers in the array
    */

   function sumArray(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
      total = total + array[i];
    }
    return total;
    console.log(total);
  }
  
  var array = [4,8,2,1,5,7,6,3];
  console.log(sumArray(array));
  