//Write a function printReverse that takes an array as an argument
//and prints out the elements in the array in reverse order
//(don't actually reverse the array itself)
function printReverse(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      console.log(array[i] + ", ");
    }
  }
  
  var array = [1, 2, 3, 4, 5];
  var array2 = ["Hi", "Hello", "Good Morning"];
  printReverse(array2);
  