const accountId = 144553
let accountEmail = "dm4972@srmist.edu.in"
var accountPassword = "12345"
accountCity = "Chennai"

//accountId = 2 // not allowed

accountEmail = "bb@bb.com"
accountPassword = "2211442"
accountCity = "Kolkata"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])
