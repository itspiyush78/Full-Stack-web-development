class Calculator{
   static add(num1,num2){
     return ` ${num1+num2}`
   }
}

const Calc = new Calculator()
console.log(Calculator.add(10,5));