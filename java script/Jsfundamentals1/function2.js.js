function myFirstfunction() {
    // all the logic inside the pair of curly braces
    console.log("This is");
    console.log("My first function");
    return; // this also undefined
}

function mySecondfunction() {
    return "This value is returned from the function";
}

function addFourNumbers(a,b,c,d){
    // 4 parameters passed, a,b,c,d
    let result = a + b + c + d;
    return 10; // 1. terminates the function, 2. gives an output from the function call
}

function multiply(x,y){
    // multiples two numbers
    console.log(x*y);
}

function isEvenOrodd(x) { // it takes a value  x and tells whether it is even or odd ?
    // x -> parameter 
    if(x % 2 == 0) {
        console.log("Even");
} else {
    console.log("Odd");
}
}

isEvenOrodd(12);   // 12 -> arguments
isEvenOrodd(17); 
isEvenOrodd(52);

let x1 = addFourNumbers(10, 11, 12, 13); // 4 argument passed
let y1 = addFourNumbers(1,2,3,4); // 4 argument passed
console.log(x1, y1);

multiply(x1, y1); //

let h = myFirstfunction();
console.log(h);
myFirstfunction();
myFirstfunction();
myFirstfunction();


let str = mySecondfunction();
console.log(str);
