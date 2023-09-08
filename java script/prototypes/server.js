
let myHeros = ["Thor", "spiderman"]
let dcHeros = ["batman","flash", "superman"]


let heropower = {
    thor: "hammer",
    spiderman: "sling",

  getSpiderPower: function(){
    console.log(`Spidy power is ${this.spiderman}`);
  }  
}

Object.prototype.piyush = function() {
    console.log('Piyush is present in all objects');
}

console.log(myHeros.piyush());
console.log(heropower.piyush());

Array.prototype.heypiyush = function() {
    console.log('piyush says hello to array');
}

console.log(myHeros.heypiyush());
//console.log(myPower.heypiyush());



const User = {
    name: "top name",
    email: "top@email.com",
}

const Teach = {
    makeVideos:true
}

const TeachingSupport = {
    isAvailable: false
}

const TAAssistant = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

//Teacher.__proto__= User

//Object.setPrototypeOf(TeachingSupport, Teacher)


String.prototype.truelength = function(){
    console.log(`true length is:${this.trim().length}`);
}

console.log("hitesh. ".truelength());
//"Anurag. ".truelength