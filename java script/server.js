// Hello World in Nodejs

console.log(this)

// && ||
// && -> both side condition should be true
// => even if both side is true, we will get true as result

let isLogedIn = true
let cardDetail = false

console.log("Allow  purchase: ", isLogedIn || cardDetail);

//let github = false
//let gmailLogin = true
//let twitterLogin = false

//console.log("Allow user to login: ", githubLogin || gmailLogin || twitterLogin);

// conditionals

// if, else, elseif, nested if else

let age = 20

if (age >= 18) {
    console.log("You can vote in election");
}

let userDetails;

//userDetails = complexFunctionTogetDetailsfromserver()

// null and undefined

let temperature;

if (userDetails) {
    console.log("user is logged in");
}else {
    console.log("please login first")
}

if(userDetails){
    console.log("logout");
}else {
    console.log("Login/Signup");
}


// traffic light example

let trafficLight = "green";

if (trafficLight === 'red') {
    console.log("Stop ! you have to wait");          
}else if (trafficLight === "yellow") {
    console.log("slow down");
}else if (trafficLight === "green"){
    console.log("You can go now");
}else{
    console.log("Signal is broken, save yourself");
}


if (trafficLight === 'red'){
    return gmailLogin()
}else if (trafficLight === "yellow"){
    return linkedinlogin()
}



// 1. userlogin
// 2. TAlogin
// 3. FacultyLogin
// 4.Admin
let role = "superadmin";


switch (role){
    case "user":
        console.log("You are a normal visitor of website");
        break;
        case "user":
            console.log("You can do anything on website");
break;
case "faculty":
    console.log("You can create/delete lectures")   
    break;
    case "ta":
        console.log("You can upload lectures") 
        break;

default:
    break;
}

let isUserLogginIn = true

isUserLogginIn ? console.log("when value is true") : console.log("when value is true");
