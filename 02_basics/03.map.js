// MAP METHOD

const arr = [1,2,3,4,5];

function squareOfNum(number){
    return number ** 2;
}

const res = arr.map(squareOfNum);
console.log(res);

// With arrow function

const arr = [1,2,3,4,5];

const squareOfNum = arr.map((number) => {
    return number ** 2;
})
console.log(squareOfNum);
