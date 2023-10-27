

function manipulateString(str) {
    const manipulatedStr = str.toUpperCase();
  
    function logString() {
      console.log(`The manipulated string is: ${manipulatedStr}`);
    }
  
    return logString;
  }
  
  function logString() {
    console.log(`The manipulated string is: ${manipulatedStr}`);
  }
  
  manipulateString("hello, world!")(logString);
  
  // Output: The manipulated string is: HELLO, WORLD!