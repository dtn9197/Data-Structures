/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.
*/

var j = "aA"
var s = "aAAbbb"
function findStone(jewel,stone) {
var counter = 0; //1

for(var i = 0; i < jewel.length; i++) { //j

    for(var s = 0; s < stone.length; s++) { //s
        if(jewel.charAt(i) == stone.charAt(s)) { //s
            console.log("jewsel found"); //s
            counter++; //s
        }

    }
}

console.log("number of stones found: " + counter); //1
return counter; //1

}
//O(n) = j * 4s + 3



function findStone2(J,S) {
    let stones = S.split("");
    let jewels = J.split("");
    let counter = 0;

    stones.forEach(s => {
        if(jewels.includes(s)) {
            counter+=1;
        }
    });
    console.log(counter);
    return counter;
    

}


findStone2(j,s);