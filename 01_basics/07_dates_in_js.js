/*-----------Dates------------*/


let myDate = new Date()
console.log(typeof myDate); // => object
console.log(myDate); // => 2025-07015T17:14:11.104Z
console.log(myDate.toString()); // => Tue Jul 15 2025 22:44:11
console.log(myDate.toDateString()); // => Tue Jul 15 2025
console.log(myDate.toJSON()); // => 2025-07-15T17:14:11.104Z
console.log(myDate.toLocaleString()); // => 7/15/2025, 10:44:11 PM

let myCreatedDate = new Date(2023, 0, 23) // Months in JS starts from 0
console.log(myCreatedDate.toDateString()); // => Mon Jan 23 2023

let myTimeStamp = Date.now()
console.log(myTimeStamp); // => 1752601145052
console.log(Math.floor(myTimeStamp/1000)); // => 1752601145


