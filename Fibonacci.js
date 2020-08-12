//write a function that return the value at nth entry in the fibonacci sequence

function fibonacci(index) {
    //create array to hold fibonacci numbers starting with 0 and 1
    //loop through from 2 to <= index
    //calculate result at index i by adding the previous two results
    //add the result into the fibonacci array
    //return the fibonacci at index
  
    var fiboArray = [0, 1];
    for (var i = 2; i <= index; i++) {
      let fiboAtIndex = fiboArray[i - 1] + fiboArray[i - 2];
      fiboArray.push(fiboAtIndex);
    }
    console.log(fiboArray);
    return fiboArray[index];
  }
  
  var index = 8;
  console.log(fibonacci(index - 1));
  