//write a function that takes a string and return how many vowels it has

function countVowels(string) {
    //convert string into lowercase
    //convert string into an charArray
    //declare counter
    //for each character in the charArray
    //if matches the vowel any of the vowels
    //add one to the counter
  
    //return counter
    string = string.toLowerCase();
    var charArray = string.split("");
    //vowels are: a, e, i, o, u
    var counter = 0;
    for (var i = 0; i < charArray.length; i++)
      if (
        charArray[i] === "a" ||
        charArray[i] === "e" ||
        charArray[i] === "i" ||
        charArray[i] === "o" ||
        charArray[i] === "u"
      )
        counter = counter + 1;
    return counter;
  }
  
  //another way of doing
  //use built in javascript for each method
  function countVowels2(string) {
    //create counter
    //create list of vowels array
    //for each char in str
    //if Vowels array contains char
    //increment counter
    //return counter
  
    var counter = 0;
    var vowels = ["a", "e", "i", "o", "u"];
  
    for (var char of string) {
      if (vowels.includes(char.toLowerCase())) {
        counter++;
      }
    }
  
    return counter;
  }
  
  console.log(countVowels("eeeex"));
  console.log(countVowels2("eeeex"));
  