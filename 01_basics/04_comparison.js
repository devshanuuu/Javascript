// Basic comparison
console.log(2  > 1);
console.log(34 >= 24);


console.log("2" > 1); // => true
console.log("02" > 1); // => true

console.log(null > 0); // => false
console.log(null == 0); // => false
console.log(null >= 0); // => true(comparison operators treat null as 0)

// Strict comparison
console.log("2" === 2); // => false
