//set

const newSet = new Set();

newSet.add(2)
newSet.add(4)
newSet.add(2)
newSet.add(1)

//console.log(newSet)

let myArray = [1, 2, 3, 4, 5, 2, 4]
let arrySet = new Set(myArray)
console.log(arrySet)
console.log(arrySet.has(9))
console.log(arrySet.has(4))
console.log(arrySet.clear())
console.log(arrySet)


// +++++++++++++++++++
// Map

const myMap = new Map
console.log(myMap.size);

let arr = [
    [1, "Mithun"],
    [2, "Alka"],
    [3, "prabir"],
    [4, "SHivam"],
    [5, "Vinay"],
    [3, "prabir"],
    [4, "Piyush"],
];

// [1, "Mithun"]

arr.map(el => myMap.set(el[0], el[1]))
console.log(myMap)
