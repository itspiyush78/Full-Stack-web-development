let button = document.querySelector('#btn')
let input = document.querySelector('#input')
button.addEventListener('click',DelayFun)

function DelayFun(){
    setTimeout(reverseString,2000)
}

function reverseString(){
    let value = input.value
    let arr = [...value];
    let temp;
    let low = 0
    let high = arr.length-1;
    while(low<high){
        temp = arr[low];
        arr[low] = arr[high]
        arr[high] = temp;
        console.log(arr[low]);
        console.log(arr[high]);
        low++;
        high--;
    }
let join = arr.join('')
    document.querySelector('#result').innerHTML = `Reverse string: ${join}`
}

