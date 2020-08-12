 //write a function factorial() which takes a single numeric argument and returns the factorial of that number
function findFactorial(number) {
    var total = 1;
    for(i = 1; i <= number; i++) {
        total = total * i;
    }
    console.log(total);
}



//recursion
function findFactorial2(number) {
    if(number == 1)
        return 1;
    return number * findFactorial2(number - 1);
}

console.log(findFactorial2(3));