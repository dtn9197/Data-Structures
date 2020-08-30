 /**PalindromRecursive() {
   * isInnerRange palindrome;
   * 
   * isOuterRangePalindrome
   * if(innerRange and outerRange)
   *  return true
   *
   * } */

  function palindromeRecursive(str, start = 0, end = str.length - 1) {
    if(start >= end)
      return true;
  
    var innerRange = palindromeRecursive(str, start + 1, end - 1);
    let outerRange = true;
    if(str.charAt(start).toLowerCase() !== str.charAt(end).toLowerCase())
      outerRange = false;
    
    if(innerRange && outerRange)
      return true;
    else 
      return false;
  }