let emp = {
    id: 101,
    name: 'Alex',
    age: 18,
    salary: 10000
};

// object.keys
const keys = Object.keys(emp);
// return an array of an object own keys
console.log(keys);

// object.values
const values = Object.values(emp);
// return an array of an object own values
console.log(values);

// object.entries
const entries = Object.entries(emp);
// return an array of an object own key value pairs
console.log(entries);

Object.seal(emp);
emp.id = 100;
delete emp.name;
console.log(emp);

