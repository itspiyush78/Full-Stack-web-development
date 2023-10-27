class Person{
    constructor(Name = "unkown",age =0){
        this.Name = Name
        this.age = age
    }

    getDetails(){
        return`Name: ${this.Name}, Age:${this.age}`
    }
}

const Person1 = new Person()
console.log(Person1.getDetails());
const Person2 = new Person("Mithun",20)
console.log(Person2.getDetails());