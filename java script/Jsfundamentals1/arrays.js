let  arr = [1,2,3,4,5];

console.log(arr);

let x = ["Piyush", 1,2,3, "UP", false, 2.3];

console.log(x);

let a = new Array(10);
console.log(a); 


// +++++++++++  What is an Array +++++++++++

// An array in javascript is a data structure that stores an ordered list of elements. It can hold elements of any data type, including numbers and strings, objects and even other arrays. Arrays are a type of object in javascript and have a number of built-in methods for adding, removing, and manipulating elements.

let colors = Array("black", "red", "green", "yellow");

console.log(colors);

// elements -> [22, 19, 30, 1, 6];
// index/pos -> 0, 1, 2, 3, 4 // JS -> arrays are 0 based indexd 

//using positions we can extract out the orginal elements
let y = [22, 19, 38, 1, 6];
console.log(y[2]); // <name of array>[<index to access>]
console.log(y[1]);
console.log(y[100]);

// update
y[1] = 99;
y[0] = "Piyush"
console.log(y);
