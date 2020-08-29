/**write a recursive function that accepts a string and return
 * the string in reversed
 * //reverse(abc) = cba
 */

 function reverseString(str) {
     var index = str.length - 1;
     return str.charAt(index) + helper(str);
     function helper(str) {
         index--;
         if(index === 0)
            return str.charAt(0);

        return str.charAt(index) + helper(str);
        
     }
 }

 console.log(reverseString("abc"));