class HashTable {
    //the hashTable size is 53, a prime number, is for efficiency purposes
    constructor(size = 53) {
        this.hashArray = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            //subtracting 96 gives you position of alphabet. e.g: a=1 z = 26
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.hashArray.length;
        }
        return total;
    }

    //hash the key, retrieve and store index
    //access index using hashArray**
    //if there is nothing at that index, create an array
    //else push the key, value pair into it as an object
    set(key, value) {
        let hashIndex = this._hash(key);
        if(!this.hashArray[hashIndex]) {
            this.hashArray[hashIndex] = [];
        }
        this.hashArray[hashIndex].push([key, value]);
        return hashIndex;
    }

    get(key) {
        let hashIndex = this._hash(key);
        let bucket = this.hashArray[hashIndex];
        if(bucket) {
            for(let i = 0; i < bucket.length; i++) {
                if(bucket[i][0] === key) {
                    return bucket[i][1];
                }
            }
        }
        return undefined;
    }

    values() {
        let valuesArray = [];
        for(let i = 0; i < this.hashArray.length; i++) {
            let bucket = this.hashArray[i];
            if(bucket) {
                for(let j = 0; j < bucket.length; j++) {
                    if(!valuesArray.includes(bucket[j][1]))
                    valuesArray.push(bucket[j][1]);
                }
            }
        }
        return valuesArray;
    }



    keys() {
        let valuesArray = [];
        for(let i = 0; i < this.hashArray.length; i++) {
            let bucket = this.hashArray[i];
            if(bucket) {
                for(let j = 0; j < bucket.length; j++) {
                    if(!valuesArray.includes(bucket[j][1]))
                        valuesArray.push(bucket[j][0])
                }
            } 
        }

        return valuesArray;
    }
}

let hashTable = new HashTable(17);
hashTable.set("dog","5")
hashTable.set("cat","2")
hashTable.set("tiger","15")
hashTable.set("lion","4")
hashTable.set("leopard","26")
hashTable.set("panther","27")
