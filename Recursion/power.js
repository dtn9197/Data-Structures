/**Write a function called power which accepts a base and an exponent. The function
 * should return the power of the base to the exponent. This function mimic the functionality
 * of Math.power() - do not worry about negative bases and exponents
 */

 function power(base, exponent) {
     if(exponent == 0)
        return 1;
    let result = 2 * power(base, exponent - 1);
    return result;
 }

 console.log(power(2,3));