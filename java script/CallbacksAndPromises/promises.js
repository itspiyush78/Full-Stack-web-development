function returnDummyPromise(){
    return new Promise(function exec(resolve, reject){
          // write your code here ...
          setTimeout(function f(){
            console.log("timer completed");
            resolve("done");
          }, 10000);
    });
}

let p = returnDummyPromise();

p
.then(function exec(val){
    console.log("promise resolved with a value", val);
})
.catch(function exec(err){
    console.log("error in catch of promise", err);
})
.finally(function fin(){
    console.log("finally promise consumed");
})

for(let i = 0; i < 100000000000000; i++) {}
console.log("end");

