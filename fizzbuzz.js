//write a function that prints all inputs between 1 and n. If n is multiple by 3 print Fizz, multiple by 5 print Buzz, log FizzBuzz for multiple of 3 and 5
function fizzBuzz(number) {
    //loop through 1 through n
    //check for divisible by 3
    //print fizz
    //else check for divisible by 5
    //print buzz
    //else check for divisible by both 3 and   5
    //print fizzbuzz
    //else print n
  
    for (var i = 0; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
      else if (i % 5 === 0) console.log("buzz");
      else if (i % 3 === 0) console.log("Fizz");
      else console.log(i);
    }
  }
  
  fizzBuzz(50);
  