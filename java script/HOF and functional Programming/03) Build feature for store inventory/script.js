const store = {
  shoes: 1,
  bottle: 2,
  Mobile: 5,
  Laptop: 10
}

// 1USD = 80INR
let exchange = 80;
 Object.keys(store).map(function(key,index){
    store[key] =  store[key]*80; 
})


console.log(store);
