/**function that counts the number of occurences of a substring in a string */
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
            //no match, break
           if(short[j] !== long[i+j]) break;
           //match, counts
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled", "lol"));