

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("M");
}

//sayMyName();

// function addTwoNumbers(number1, number2){//parameters
//    console.log(number1 + number2);

//}

function addTwoNumbers(number1, number2){
     
   // let result = number1 + number2;
   // return result;
   return number1 + number2;

}


const result = addTwoNumbers(3,4);//arguments
//console.log("Result:", result);

function loginUserMessage(username){
  //  if(username === undefined){
    //    console.log("Please enter a username")
      //  return
    //}
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Debojyoti"))
console.log(loginUserMessage())