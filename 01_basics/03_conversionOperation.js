// **********Conversions**********


let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


let value = true

console.log(typeof value);
console.log(typeof (value));

let valueInNumber2 = Number(value)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

// "33" => 33
// "33abc" => Nan
//  true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "shanu" => true


// ***********Operations************

let num = 3
let negNum = -num
console.log(negNum);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);

let str1 = "Hello"
let str2 = " Shanu"

let str3 = str1+ str2
console.log(str3); 

console.log("1" + 2); // => 12
console.log(1 + "2"); // => 12
console.log("1" + 2 + 2); // => 122
console.log(1 + 2 + "2"); // => 32
