const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  let sum = [];
    for(let i = 1; i <= 10; i++){
      console.time(`Time ${i}`);
      let increase = i * increment
      sum.push(addNums(increase));
      console.timeEnd(`Time ${i}`)
    }
  return sum;
  // Then, add timing code

  // Your code here

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
let sum = [];
    for(let i = 1; i <= 10; i++){
      console.time(`Time ${i}`);
      let increase = i * increment
      sum.push(addManyNums(increase));
      console.timeEnd(`Time ${i}`)
    }
  return sum;
// Then, add timing code

  // Your code here

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);