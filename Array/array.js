/**Implementation of an array 
 * length property - how long the array is
 * it also represents the "next" index that data will be pushed into
 * data property is the object with integer keys that represents an array
 * Arrays in javascript are objects with integer-based keys
*/
class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index]
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const deletedItem = this.data[index];
        this.shiftItems(index);
    }
    //shift items in the array to the left and delete last index
    shiftItems(index) {
        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    //delete at beginning of index
    shift() {
        for(let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
    }
    
    unshift(value) {
     this.insert(0, value);
    }
    //insert item at a certain index
    insert(index, value) {
        if(this.length === 0 || this.length === 1) return this.push(value);
        let prev = this.data[index];
        let currentValue;
        //shift items from index 1 through last index
        for(let i = index + 1; i < this.length; i++) {
            currentValue = this.data[i];
            this.data[i] = prev;
            prev = currentValue;
        }

        //set values for beginning and end index
        this.data[index] = value;
        this.push(currentValue);
        return this.data;
    }
}

const newArray = new Array();
// console.log("old array:");
// newArray.push("Hi");
// newArray.push("There");
// newArray.push("You");
// console.log(newArray);
// newArray.unshift(5);

// console.log("new Array: ");
// console.log(newArray);

newArray.unshift(5);
console.log(newArray);
newArray.unshift(10);
console.log(newArray);
newArray.unshift(15);
console.log(newArray);
newArray.shift();
console.log(newArray);


//insert test

// newArray.push(5);
// newArray.push(7);
// newArray.push(32);
// newArray.push(1);
// newArray.push(123);
// newArray.push(6);
// console.log("before unshift: ")
// console.log(newArray);

// newArray.unshift2(2, "hello");
// console.log("after unshift:")
// console.log(newArray);