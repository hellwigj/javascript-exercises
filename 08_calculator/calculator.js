const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	let total = array[0];
  if (array.length === 0) {
    return 0;
  }
  for (let i = 1; i <= array.length - 1; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function(nums) {
  let total = 1;
  for (let i = 0; i <= nums.length - 1; i++) {
    total *= nums[i];
  }
  return total;
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(x) {
	let total = 1;
  for (let i = x; i>0; i--) {
      total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
