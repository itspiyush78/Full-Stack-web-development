function greetingPromise(name) {
    return new Promise((resolve, reject) => {
      if (name) {
        resolve(`Hello, ${name}!`);
      } else {
        reject("No name provided.");
      }
    });
  }
  
  greetingPromise("Mithun")
    .then((message) => {
      console.log(message); // Output: "Hello, Mithun!"
    })
    .catch((error) => {
      console.log(error); // Output: "No name provided."
    });