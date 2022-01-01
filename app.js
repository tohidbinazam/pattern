
// Email pattern

let email = 'tohid.binazamsunny1@jtv.com.uk';
let pattern = /^[^\.-/][a-z0-9\.-_]{1,}@[a-z0-9-]{1,}\.[a-z\.]{2,}$/;

console.log(pattern.test(email));


// Username pattern

let username = 'tohidbinazam'
let patternus = /^[^A-Z0-9-_\.][a-z0-9\.-_\.]{5,}$/;

console.log(patternus.test(username));


// Number pattern

let number = '+8801994249463';
let paternnu = /^(\+8801|8801|01)[0-9]{9}$/;

console.log(paternnu.test(number));


// Password pattern

let pass = "^&a0@#Aye."
let patternpass = /[a-z0-9\.-_@#\$..]{8,}/i;

console.log(patternpass.test(pass));


// Zipcode pattern

let zip ='9100';
let patternzi = /[0-9]{4}/;
console.log(patternzi.test(zip));

