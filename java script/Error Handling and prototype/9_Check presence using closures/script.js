const arr = [1,2,3,4,5]

function numberCheckr(arr){
    return function checKnum(num){
        return arr.includes(num);
    }
}

const checKnum = numberCheckr(arr);
console.log(checKnum(3));