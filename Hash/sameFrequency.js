/**write a function called sameFrenquency. Given two positive integers, find out if two numbers have the same number of digits */


/**O(n) Solution
 * initialize num1 and num2 as array of strings
 * if(str1 and str2 length doesn't match) return false;
 * 
 * initialize hashSet of hashStr1 and hashStr2
 * for each letter in str1
 *  if(letter doesn't exist in hash)
 *      hash[letter] = 1;
 *  else
 *      increment hash[letter] by 1
 * 
 * for each letter in str2
 *  if(letter doesn't exist in hash)
 *      initialize hash[letter] to 1;
 *  else
 *      incrementn hash[letter] by 1;
 * 
 * for each key in hashStr1
 *  if(value of hashStr1[key] doesn't match value of hashStr2[key]) return false;
 * 
 * return true;
 * 
 */
function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
    //   countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    // (countNum1[strNum1[i]] === undefined) ? countNum1[strNum1[i]] = 1: countNum1[strNum1[i]] += 1;
    if(!countNum1[strNum1[i]])
        countNum1[strNum1[i]] = 1;
    else
        countNum1[strNum1[i]] += 1;
    }
    
    for(let i = 0; i < strNum1.length; i++){
    //   countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    // (countNum2[strNum2[i]] === undefined) ? countNum2[strNum2[i]] = 1: countNum2[strNum2[i]] += 1;
    if(!countNum2[strNum2[i]])
        countNum2[strNum2[i]] = 1;
    else
        countNum2[strNum2[i]] += 1;
        
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }

  console.log(sameFrequency(2435,3524));