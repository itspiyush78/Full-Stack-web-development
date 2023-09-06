function product(n,p){
    this.name = n;
    this.price = p;
}

const p = new Product("iphone 14", 100000);
console.log(p);

/**
 * 1. -> this is js diff than other languages
 * 2. -> this keyword refers to the context from we call the function
 */


/**
 *  if you don't return anything, js return the newly created object
 *  if you return anything, then also we get newly created object
 * if you return custom object, then js will return this custom object not  the newly created object
 * */