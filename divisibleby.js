//write a function that takes two inputs - lower bound and upper bound - and return all the numbers inbetween that are divisible by 5 AND 3

//loops through every number
//if number % 5 and %3
//print number
//else////

function divisibleBy(lowerBound, upperBound) {
    for (var i = lowerBound; i <= upperBound; i++) {
      if (i % 5 == 0 && i % 3 == 0) console.log(i);
    }
  }
  
  divisibleBy(5, 50);
  