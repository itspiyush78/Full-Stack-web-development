function isEvenOrOdd(x) {
    try {
        if (x % 2 === 0) {
            console.log("even");
    } else {
        console.log("odd");
    }
    console.log("ending");
} catch {
console.log("handled");
}

}

isEvenOrOdd(11);
console.log("stop");