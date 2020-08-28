//write a function that takes two strings and determine if they're anagram. Return true if they are anagram, false otherwise
//anagrams are two words with same letters arranged differently

/*logic
    //conver strings to lowerCase
    //convert the strings into charArrays
    sort the two arrays
    if(string1Array.length != string2Array.length)
      return false
    for each letter in string1
      if (string1Array[i] !== string2Arrayi]
        return false;
        
    return true;
  */
 function isAnagram(string1, string2) {
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    
    var charArray1 = string1.split("");
    var charArray2 = string2.split("");
    /* alternatve way to store chars in array
      var charArray1 = new Array();
      var charArray2 = new Array();
      for (var i = 0; i < string1.length; i++) {
        charArray1.push(string1.charAt(i));
      }
      for (var i = 0; i < string2.length; i++) {
        charArray2.push(string2.charAt(i));
      }
    */
    charArray1.sort();
    charArray2.sort();

    
    if (charArray1.length != charArray2.length) return false;
    for (var i = 0; i < charArray1.length; i++) {
      if (charArray1[i] !== charArray2[i]) return false;
    }
  
    return true;
  }

  //this method uses object
  //frequency counter pattern
  function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }

  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagramzs', 'nagaramm')
  
  console.log(validAnagram("aabbc", "bbaaac"));
 
  

  