

function getPerson(person){
    try{
        if(person.name&&person.age){
            return `Name:${person.name}, Age:${person.age}`
        }
        else{
            throw new Error()
        }
    }
    catch{
       return "Invalid Parameter type"
    }
}
console.log(getPerson({name: "Mithun",age: 20}));
console.log(getPerson({name: "Mithun"}));
console.log(getPerson(["name","Mithun"]));