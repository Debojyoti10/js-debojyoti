// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.6

const isLoggedIn = false
const outsideTemp = null;
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 89523426532653875274286354n


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "debojyoti",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof(anotherId));



//++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let name = "Debojyoti"