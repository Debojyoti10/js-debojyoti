//if
const isUserloggedIn = true

if(isUserloggedIn){

}


const balance = 1000

//if (balance > 500) console.log("test");

//if (balance < 500){
//    console.log("less than");
//}else if(balance < 750){
//    console.log("less than 750")
//}else if(balance < 900){
//    console.log("less than 900")
//} else {
//    console.log("less than 1200")
//}

const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = true
const loggedInfromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if (loggedInfromGoogle || loggedInfromEmail){
    console.log("User logged in");
}