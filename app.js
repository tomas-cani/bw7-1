let biggestSum = require('./biggestSum');
let numbers = process.argv.slice(2).map(a => Number(a));

console.log(`The biggest sum is : ${biggestSum(numbers)}`);
