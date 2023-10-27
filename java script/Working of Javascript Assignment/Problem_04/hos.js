/*Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting */

addition();

function addition(){
    console.log(num1);// undefined;
    console.log(num2);// reference error can't access;
    console.log(mun3);// reference error can't access;

    var num1 = 21;
    let num2 = 7;
    const num3 = 17;
    
    console.log(num1)
    console.log(num2)
    console.log(num3)
}
