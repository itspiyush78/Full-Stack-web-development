function ageInDays(person) {
    const fullName = person.firstName + " " + person.lastName;
    const ageInDays = person.age * 365;
  
    function logResult() {
      console.log(
        `The person's full name is ${fullName}, and their age in days is ${ageInDays}.`
      );
    }
  
    return logResult;
  }
  
  function logResult() {
    console.log(
      `The person's full name is ${fullName}, and their age in days is ${ageInDays}.`
    );
  }
  
  const person = {
    firstName: "Mithun",
    lastName: "S",
    age: 20,
  };
  
  ageInDays(person)(logResult);
  
  // Output: The person's full name is Mithun S, and their age in days is 7300.