// **********Conversions**********


let score = "33abc"

console.log(typeof score); // string
console.log(typeof (score)); // string

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // Nan


let value = true

console.log(typeof value); // boolean
console.log(typeof (value)); // boolean

let valueInNumber2 = Number(value)
console.log(typeof valueInNumber2); // number
console.log(valueInNumber2); // 1

// "33" => 33
// "33abc" => Nan
//  true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

// 1 => true; 0 => false
// "" => false
// "shanu" => true


// ***********Operations************

let num = 3
let negNum = -num
console.log(negNum); //-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);

let str1 = "Hello"
let str2 = " Shanu"

let str3 = str1+ str2
console.log(str3); // Hello Shanu

console.log("1" + 2); // => 12
console.log(1 + "2"); // => 12
console.log("1" + 2 + 2); // => 122
console.log(1 + 2 + "2"); // => 32

console.log(true); // true
console.log(+true); //1

let num1, num2, num3

num1 = num2 = num3 = 2+2 // not good readebale code

let gameCounter = 100
gameCounter++;
console.log(gameCounter);