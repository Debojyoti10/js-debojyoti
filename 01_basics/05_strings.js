const name = "Debojyoti"
const repocount = 50

//console.log(name + repocount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String(`Debojyoti-10`)

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-11,4)
console.log(anotherString);

const newString1 = "   Debojyoti   "
console.log(newString1);
console.log(newString1.trim());

const url = "https://debojyoti.com/debojyoti%20mondal"
console.log(url.replace('%20', '-'))

console.log(url.includes('debojyoti'));

console.log(gameName.split('-'));