// function doubleIt(num) {
//     return num * 2;
// }

// const doubleIt = function (num) {
//     return num * 2;
// }

const doubleIt = num => num * 2; 
const add = (x, y) => x + y;
const give6 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = add(50, 87);
const result2 = give6();
const result3 = doMath(6, 4);
console.log(result3);