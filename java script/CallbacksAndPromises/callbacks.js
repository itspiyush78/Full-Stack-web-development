function hof(fn){
    fn();
}

hof(function f(){
    console.log("executing....")
})

setTimeout(function(){
    console.log("done")
}, 2000);