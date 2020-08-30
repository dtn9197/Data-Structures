//write a function that takes a string and return a value if it is a palindrome
//a palindrome is a word that when spells backward is the exact same thing

/**use moving pointer pattern */
function IsPalindrome(str) {
  let start = 0;
  let end = str.length - 1;
  while(start < end) {
    let leftChar = str.charAt(start).toLowerCase();
    let rightChar = str.charAt(end).toLowerCase();
    if(leftChar !== rightChar)
      return false;
    start++;
    end--;
  }
  return true;
}

  /** Algorithm
   * create lowercase version of str
   * create a reversed version of that str
   * if the two strings are equal
   *  return true
   * else
   *  false
  */
  function IsPalindrome2(str) {
    var newString = str.toLowerCase();
    var reversedString = newString.split("").reverse().join("");
    if(newString == reversedString)
      return true;
    else
      return "Not a palindrome";

      //one liner solution
    // return str === str.split('').reverse().join('');
  }
  

  function IsPalindrome3(str) {
   
    var lowercase = str.toLowerCase();
    
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
  console.log(IsPalindrome("Hananah"));
  console.log(IsPalindrome2("Hananah"));

  
  
 