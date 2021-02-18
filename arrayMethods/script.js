
var fruits = ["Banana", "Orange", "Apple", "Mango"];

//toString = converts array into string
console.log("using toString method = " + fruits.toString()) ;

//join() = alsoo joins array elements into a string
console.log("using join method = " + fruits.join());

//pop() method removes the last element from an array
var x = fruits.pop();
console.log("pop method returns the popped element from array = " + fruits.pop())


//push()
fruits.push("kiwi");
console.log( "kiwi is pushed = " + fruits);

//shifting
fruits.shift();
console.log("Banana is shifted = " + fruits);

//unshift
fruits.unshift("Lemon");
console.log("Lemon is added = " + fruits);

//The splice() method can be used to add new items to an array:
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log( "lemon and kiwi are added = " +fruits);

//Using splice() to Remove Elements
fruits.splice(0, 1); 
console.log("lemon has been removed = " + fruits);

//The slice() method slices out a piece of an array into a new array.
var citrus = fruits.slice(1);
console.log("new array from index 1 is copied in a new array citrus = " + citrus);

//specified elements are copied in a new array
var citrus2 =fruits.slice(1,3)
console.log("specified elements are copied = " + citrus2)

