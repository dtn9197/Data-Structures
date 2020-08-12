//write a function that takes a string and return a value if it is a palindrome
//a palindrome is a word that when spells backward is the exact same thing
function IsPalindrome(str) {
    //conver string to lower case
    var lowercase = str.toLowerCase();
    console.log(lowercase);
    //find and store midpoint
    var len = Math.floor(lowercase.length / 2);
    //loop from 0 to mid-point
    //if string at str[i] to str[i - 1 - i] not equals
    // not a palindrome, return false
    //check pass, return true
    for (var i = 0; i < len; i++) {
      if (lowercase[i] !== lowercase[lowercase.length - 1 - i]) return false;
    }
    return true;
  }
  
  //API function for palindrome
  function IsPalindrome2 (str) {
    return str == str.split('').reverse().join('');
  }
  
  console.log(IsPalindrome("Hannah"));
  console.log(IsPalindrome2("Hannah"));
  isP
  