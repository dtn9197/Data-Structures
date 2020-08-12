/*create a function that reverses a string*/

function reverseString(string) {
    //create reverseString array
    //turn string input into an array
    //loop through string input array in reverse
        //push each item into reverseString array
    //turn reverstringArray into a string, store it in outputString


    var reverseStringArray = [];
    var stringArray = string.split("");
    var endpoint = stringArray.length - 1;
    for(var i = endpoint; i >= 0; i--) {
        reverseStringArray.push(stringArray[i]);
    }

    var newString = reverseStringArray.join("");
    console.log(newString);
    return newString;

}

// reverseString("Hi My name is Andrei");
reverse2("Hi My name is Andrei");


function reverse(str) {
    //check input
    if(!str || str.length < 2 || typeof str !== "string") {
        return "not string";
    }

    const backwards = [];
    const totalItems = str.length - 1;

    for(let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    console.log(backwards.join(""));
    return backwards.join("");
}

function reverse2(str) {
    console.log(str.split("").reverse().join(""));
    return str.split("").reverse().join("");
}

const reverse3 = str => str.split("").reverse().join("");
