/*Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone. */


function goalFunction() {

    console.log(life);   //ReferenceError: Cannot access 'life' before initialization

    let life = "If you can DREAM it, You can DO it!";
  }
  
  goalFunction();
  