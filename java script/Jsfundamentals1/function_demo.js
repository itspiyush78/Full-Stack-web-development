function calculateSquare(x) { // here x is a parameter 
return x * x;
}

function multiple(x=2,y){
    return x * y;
}

function addElements([num1,num2,num3]){
    return num1 + num2 + num3;     
}

function sumOfAllParameters(){
    let sum = 0 ;
    for (let i = 0; i <arguments.length; i++) {
        sum += arguments[i];
    }
return sum;
};


//console.log(calculateSquare(10));
//console.log(multiple(9,8));
//let arr = [1,2,3,4,5,6];
//console.log(addElements(arr));
console.log(sumOfAllParameters(1,2,3,4,5,6));