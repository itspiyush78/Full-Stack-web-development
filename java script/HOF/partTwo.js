let arr = [ 2,3,4]

arr.forEach(function(element, index, arr){
    console.log(index, element, arr)
})

arr.forEach((element, index, arr) => {
    console.log("arrow",index, element, arr);
})

const heros = ["naagraj", "doga", "dhruva", "maniraj"]

heros.forEach((el) => console.log(el.toUpperCase()))
heros.map((el) => console.log(el.toUpperCase())) //

console.log(heros);
const herosWithRaj = heros.filter((h) => {
    h.endsWith('raj')
})
console.log(herosWithRaj);

// cart 
const cartBill = [20, 30, 50]

const sumOfCartBill = cartBill.reduce((prev, curr) => prev + curr, 0)
console.log(sumOfCartBill);

// check if all values are numbers
const gameScore = [200,310, 300, 310, 100, 250, 150]
console.log(typeof gameScore[0]);
const gameScoreCheck = gameScore.every((v) => typeof v === "Number")
 console.log("check:", gameScoreCheck);

 // check if the any score is above 200
 const above200 = gameScore.find((score) => score > 200);
 console.log("above:", above200);


// findIndex
//some
//sort
