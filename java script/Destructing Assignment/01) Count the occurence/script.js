
function WordCount(string){
  let words = string.split('')
  let map = new Map();

  for(const word of words){
    if(map.has(word)){
        map.set(word,map.get(word)+1);
    }
    else{
        map.set(word,1)
    }
  }
   return map
}

let string = "I am Piyush Singh and I am learning full stack web development from Pw skills"
console.log(WordCount(string));