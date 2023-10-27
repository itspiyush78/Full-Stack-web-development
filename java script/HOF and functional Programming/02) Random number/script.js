let number = document.getElementById('pick-btn')
let result = document.getElementById('displayResult')

//function to generate random number
function randomNumber(){
  let randomnum = Math.floor(Math.random()*100);
  console.log(randomnum);
  result.innerHTML = randomnum;
let reset = document.getElementById('reset-btn')
reset.addEventListener('click',()=>{
  result.innerHTML = "pick a number"
})
}

//function that will countdown the seconds
function randomWithDelay(seconds){
  console.log(seconds);
  remainingseconds = seconds;
  result.innerHTML = `Time remaining ${remainingseconds}seconds`
    const Timeremaing = setInterval(function(){ 
      remainingseconds--
      console.log(remainingseconds);
      if(remainingseconds<=0){
       clearInterval(Timeremaing)
       randomNumber()
      }
      else{
        result.innerHTML = `Time remaining ${remainingseconds}seconds`
      }
    },1000)
}

