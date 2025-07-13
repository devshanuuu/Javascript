// Primitve type

/*7 types : String, Number, Boolean, null, undefined,
 symbol, BigInt */   
const score = 100
const scoreValue = 100.3

const isLogged = false
const outsideTemp = null
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false(every call to symbol creates a unique and distinct symbol)

const bigNumber = 52342444234234423n


// Reference type (Non primitive)

/* Array, Objects, Functions */
const heros = ["ironman", "flash", "hulk"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world")
}

// Datatype know
console.log(typeof scoreValue); // => number
console.log(typeof outsideTemp); // => object(typeof of null is object)
console.log(typeof myFunction); // => function
console.log(typeof heros); // => object

// ***************************Memory********************

/* Stack memory(Primitve), Heap memory(Non-Primitve) */

let myYoutubename = "okeydokey.com"

let anotherName = myYoutubename
anotherName = "discovery.com"

console.log(myYoutubename); // => okeydokey.com
console.log(anotherName); // => discovery.com

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "shanu@google.com"

console.log(userOne.email); // => shanu@google.com
console.log(userTwo.email); // => shanu@google.com


