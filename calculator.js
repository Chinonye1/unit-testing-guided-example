function sum(a = 0, b = 0) {
  if (b === undefined) {
    return a + 0;
  }
  if (a === undefined && b === undefined) {
    return 0;
  } 
  
  
  return a + b;
}

function subtract(a = 0, b = 0) {
  if (b === undefined) {
    return a - 0;
  }
  if (a === undefined && b === undefined) {
    return 0;
  }
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function multiply(a, b) {
  if (a === undefined && b === undefined) {
    return 0;
  }
  if (b === undefined) {
    return a * 1;
  }
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
