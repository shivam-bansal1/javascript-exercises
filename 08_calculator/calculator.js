const add = function(a, b) {
	return a+b ;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	if (arr.length === 0) {
    return 0;
  }
  
  return arr.reduce((total, currentNumber) => total+currentNumber, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, num) => num*product);
};

const power = function(base, powerNum) {
	return Math.pow(base, powerNum);
};

const factorial = function(num) {
	if(num === 0 || num === 1) {
    return 1;
  }

  let result = 1;
  for(let i=1; i<=num ;i++) {
    result *= i;
  }

  return result;
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
