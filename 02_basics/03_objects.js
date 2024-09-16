// singleton

// object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "Debojyoti",
    "full name": "Debojyoti Mondal",
    age: 21,
    [mySym]: "mykey1",
    location: "Chennai",
    email: "debojyotimondal2202@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["Monday","Saturday"]
}

console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser[mySym]);


Jsuser.email = "debojyoti@gmail.com";
//Object.freeze(Jsuser);
//Jsuser.email = "debo@gmail.com";
//console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting);
console.log(Jsuser.greetingTwo());