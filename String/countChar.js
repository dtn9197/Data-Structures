//a function that counts each character in a string
//and return an object of key value pair

function charCount(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)) {
           
            // if(obj[char] > 0) {
            //     obj[char]++;

            // } else {
            //     obj[char] = 1;
            // }

            // if(obj.hasOwnProperty(char))
            //     obj[char]++;
            // else
            //     obj[char] = 1;

            if(obj[char] == undefined)
                obj[char] = 1;
            else
                obj[char]++;
        }
    }
    return obj;
}

//refactored version
function charCount2(str) {
    var obj = {};
    for (var char of str) {
        char = char.toLowerCase();
        if(isAlphaNumeric(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && //numeric(0 - 9)
        !(code > 64 & code < 91) && //upper alpha(a - z)
        !(code > 96 && code < 123)) { //lower alpha(a - z)
        return false;
    }
    return true;
}

console.log(charCount("hello"));


