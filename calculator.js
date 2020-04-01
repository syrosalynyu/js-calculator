const exampleAdditionInput = {
  num1: -3,
  num2: 4,
  operation: '/',
};


// when Object is empty
const objectCantBeEmpty = function(input) {
  if (Object.keys(input).length === 0) {
    console.log('Your input is empty! Please try again.');
    return true;
  }
}

// validate num1 and num2. Both need to be numbers
const mustBeNumber = function(input) {
  if (typeof input.num1 !== 'number' || typeof input.num2 !== 'number' ) {
    console.log('Please provide valid number(s)!');
    return true;
  }
}

// denominator can't be 0
const denominatorCantBeZero = function(input) {
  if (input.num2 === 0) {
    console.log('Denominator can\'t be 0!');
    return true;
  }
}

//list of supported operators
const operators = ['add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/']

// validate the operator
const operatorsValidation = function(input) {
  if (!operators.includes(input.operation)) {
    console.log('Please provide valid operator!');
    return true;
  }
}



const calculate = function(input) { 
  
  let result;
  if (objectCantBeEmpty(input)) {
    return;
  } else if (mustBeNumber(input)) {
    return;
  } else if (denominatorCantBeZero(input)) {
    return;
  } else if (operatorsValidation(input)) {
    return;
  } else if (input.operation === 'add' || input.operation === '+') {
      result = input.num1 + input.num2;
      console.log(`${input.num1} + ${input.num2} = ${result}`);
  } else if (input.operation === 'subtract' || input.operation === '-') {
      result = input.num1 - input.num2;
      console.log(`${input.num1} - ${input.num2} = ${result}`);
  } else if (input.operation === 'multiply' || input.operation === '*') {
      result = input.num1 * input.num2;
      console.log(`${input.num1} * ${input.num2} = ${result}`);
  } else if (input.operation === 'divide' || input.operation === '/') {
      result = input.num1 / input.num2;
      console.log(`${input.num1} / ${input.num2} = ${result}`);
  }
}

calculate(exampleAdditionInput);