const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let sum = [];
    for(let i = 1; i <= 10; i++){
      let increase = i * increment
      sum.push(addNums(increase));
    }
  return sum;

}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
    let sum = [];
    for(let i = 1; i <= 10; i++){
      let increase = i * increment
      sum.push(addManyNums(increase));
    }
  return sum;

}

module.exports = [addNums10, addManyNums10];