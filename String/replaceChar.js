//Given a valid (IPv4) IP address, return a defanged version of that IP address.

//A defanged IP address replaces every period "." with "[.]".

/* Use API
  return string.replace("text to replace", "replacement");
*/

/*
//this strategy builds a new string one by one from strach
create a string
for each char of ip
  if char is replacement
    add <replacementValue> to the string
  else
    add normal char to the string

return string
*/
function replaceIP2(ip) {
    let str = "";
    for (let s of ip) {
      if (s === ".") {
        str += "[.]";
      } else {
        str += s;
      }
    }
  
    return str;
  }
  
  /*
    split string into charArray
    for each char in charArray
      if char is "."
        replace with "[.]"
    
    join charArray back
    return charArray
  */
  function replaceIP(ip) {
    var charArray = ip.split("");
    console.log(charArray);
    for (var i = 0; i < charArray.length; i++) {
      if (charArray[i] === ".") charArray[i] = "[.]";
    }
  
    return charArray.join("");
  }
  
  console.log(replaceIP("1.1.1.1"));
  console.log(replaceIP2("2.2.2.2"));
  