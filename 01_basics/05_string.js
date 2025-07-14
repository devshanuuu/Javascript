const name = "Shanu"
const repoCount = 20

//console.log(name + repoCount + " value"); => not good syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

/*Another way to declare string*/

const gameName = new String("shanu.th")
console.log(gameName); // => String: 'shanu.th'

/*String Methods*/
console.log(gameName[0]); // => s
console.log(gameName.length); // => 8
console.log(gameName.toUpperCase()); // => SHANU.TH
console.log(gameName.charAt(2)); // => a

const newString = gameName.substring(0, 3) // 3 index element is not included 
console.log(newString); // => sha

const anotherString = gameName.slice(-3) // Last 3
console.log(anotherString); // => .th

const stringTwo = gameName.substring(0)
console.log(stringTwo); // => shanu.th

const stringThree = gameName.substring(-2, 3) // remember if start or end is less than 0, JS converts it to 0
console.log(stringThree);

const stringFour = "    shanu   "
console.log(stringFour.trim()); // => shanu

const url = "https://shanu.com/shanu%20portfolio"
console.log(url.replace('%20', '-')); // will replace %20 with -
console.log(url.includes('sha')); // => true
console.log(url.includes('okay')); // => false

const stringFive = "shanu-btech-cse"
console.log(stringFive.split('-')); // => ['shanu', 'btech', 'cse']













