

function doubleUsingCallback(arr, callback) {
  // Create a new array to store the doubled values
  const doubledArr = [];

  // Loop through the original array and apply the callback to each element
  for (let i = 0; i < arr.length; i++) {
    doubledArr.push(callback(arr[i]));
  }

  // Return the new array with the doubled values
  return doubledArr;
}

const myArray = [1, 2, 3, 4, 5];

function double(num) {
  return num * 2;
}

const doubledArray = doubleUsingCallback(myArray, double);

console.log(doubledArray); // Output: [2, 4, 6, 8, 10]