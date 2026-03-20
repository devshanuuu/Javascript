// HIGHER ORDER FUNCTIONS

const arr = [1,2,3,4,5];

function square(number){ 
    return number ** 2; 
} 

function cube(number){ 
    return number ** 3; 
} 

function calculatePower(cb, arr){ 
    let tempArr = []; 
    for(let number of arr){ 
        tempArr.push(cb(number)) 
    }
     return tempArr; 
}

const squareOfNum = calculatePower(square,arr); 
console.log(squareOfNum);

const cubeOfNum = calculatePower(cube, arr); 
console.log(cubeOfNum);