const increment = document.getElementById("inc")
const decrement = document.getElementById("dec")
const displayValue = document.getElementById("display")
const resetValue = document.getElementById("resetVal")

increment.addEventListener("click" ,() =>{
    let value = Number(displayValue.innerText);
    if(value<10){
        displayValue.innerText = value+1
    }
    else{
        alert("10+ value are not allowed")
    }
});

decrement.addEventListener("click" , () =>{
    let value = Number(displayValue.innerText);
    if(value>0){
    displayValue.innerText = value-1
    }
    else{
        alert("Negative value are not allowed")
    }
});

resetValue.addEventListener("click" , () =>{
    displayValue.innerText = 0;
});
