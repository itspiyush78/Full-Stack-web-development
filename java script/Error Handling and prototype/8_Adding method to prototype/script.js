class createPrototype {
    constructor(name) {
        this.name = name;
    }
    printDetails() {
        console.log(` "Hello, the student is ${this.name}" `);
    }
}


const student = new createPrototype("Mithun")
student.printDetails()