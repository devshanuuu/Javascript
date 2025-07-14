/*-------Numbers---------*/


const score = 400
console.log(score); // => 400

const balance = new Number(100)
console.log(balance); // => [Number: 100]

const balanceOne = 79823.8902
console.log(balanceOne.toFixed(2)); // => 79823.89

const balanceTwo = 268.899
console.log(balanceTwo.toPrecision(4)); // => 268.9
console.log(balanceTwo.toPrecision(3)); // => 269
console.log(balanceTwo.toPrecision(2)); // => 2/7e+2

const balanceThree = 100000
console.log(balanceThree.toLocaleString('en-IN')); // => 1,00,000


/*----------Maths--------*/


console.log(Math); // => Object [Math] {}
console.log(Math.abs(-4)); // => 4
console.log(Math.round(4.4)); // => 4
console.log(Math.ceil(4.4)); // => 5
console.log(Math.floor(4.9)); // => 4
console.log(Math.min(4, 5, 3, 8)); // => 3
console.log(Math.max(4, 5, 3, 8)); // => 8





