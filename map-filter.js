const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for(let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// } 

// const square = numbers.map(element => element * element);
// console.log(square);

const result = numbers.filter( x => x < 3)

const isThere5 = numbers.find( x => x > 5)
console.log(isThere5);