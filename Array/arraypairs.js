//write a function to log all pairs of an array
//
var array = [1,2,3];
function arrayPair(array) {
    for (var i = 0; i < array.length; i++) {
        for(var j = 0; j < array.length; j++) {
            console.log(array[i]);
            console.log(array[j]); 
        }
    }
}

arrayPair(array);