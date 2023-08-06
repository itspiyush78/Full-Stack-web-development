    let arr = [10, 11, 12, 13];

     console.log(arr);

     arr.push(9);  //to add a new element at the last
     arr.push(19);
     
     console.log(arr);

    arr.pop(); //remove an element at the last
    arr.pop(); 
    console.log(arr);

    arr.shift(); //remove an element at the last

    console.log(arr);

    arr.unshift(78);

    console.log(arr);


    const a1 = [1,2,3,4];
    const a2 = [5,6,7,8,9];

    const res = a1.concat(a2); // to return a new array with the elements of a2

    console.log(res);

    const x = [1,2,3,4,5,6,7,8];
    
    const s = x.slice(2,4); //to fetch data from start to end - 1

    console.log(s);

const str = x.join("#"); //to club all the elements together to form a string seprated by a given char 
console.log(str);

const rev = x.reverse();

console.log(rev, x);


const a = [1,2,3,4,5,6,7,8,9,10]
console.log(a.indexOf(16));

// arrays.splice(start, deletecount, i1, i2, i3, i4, i5, i6, i)
const removed = a.splice(2,2,0,0,0);

console.log(a,removed);


