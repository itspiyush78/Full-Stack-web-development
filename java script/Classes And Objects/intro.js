class Product {// class is kind of like a templete
 
    constructor(n,p){
         console.log("calling the constructor");
       this.name = n; // this keywords actually refers to the same empty object we created
       this.price = p; // data members
    }

    display() { // class methods are nothing but functions, they represent behavior
    console.log("Display a  Product", this.name, this.price);
    }       
}


const p = new Product("iphone 14", 100000); //new -> creates an empty plain object
console.log(p);
p.display();
const p1 = new Product();