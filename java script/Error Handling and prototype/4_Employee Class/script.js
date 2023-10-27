class Employee{
    constructor(name,position,salary){
       this.name = name
       this.position = position
       this.salary = salary
    }

    getSalary(){
        return this.salary
    }
}

const empolyee1 = new Employee("Mithun","Senior Developer","80000");
console.log(empolyee1.getSalary());