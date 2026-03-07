// Roll a single 6-sided die
function d6() { 
  return Math.floor(Math.random() * 6) + 1;
}

// Roll n dice and return an array of numbers
function getRolls(n) {
  return Array.from({ length: n }, () => d6());
}

// Sum an array of numbers
function sum(nums) {
  return nums.reduce((prev, cur) => prev + cur, 0);
}

export { d6, getRolls, sum };