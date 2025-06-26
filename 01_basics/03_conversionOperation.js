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