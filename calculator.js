const exampleAdditionInput = {
  num1: -3,
  num2: '5',
  operation: 'add',
};


// when Object is empty
const objectCantBeEmpty = function(input) {
  if (Object.keys(input).length === 0) {
    console.log('Your input is empty! Please try again.');
    return false;
  }
}

// validate num1 and num2. Both need to be numbers
const mustBeNumber = function(input) {
  if (typeof input.num1 !== 'number' || typeof input.num2 !== 'number' ) {
    console.log('Please provide valid number(s)!');
    return false;
  }
}

// denominator can't be 0
const denominatorCantBeZero = function(input) {
  if (input.num2 === 0) {
    console.log('Denominator can\'t be 0!');
    return false
  }
}

//list of supported operators
const operators = ['add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/']

// validate the operator
const operatorsValidation = function(input) {
  if (!operators.includes(input.operation)) {
    console.log('Please provide valid operator!');
    return false;
  }
}




const calculate = function(input) { 
  objectCantBeEmpty(input)
  mustBeNumber(input)
  denominatorCantBeZero(input)
  operatorsValidation(input)

  let result = 0;
  switch (input.operation) {
    case 'add': case '+':
      result = input.num1 + input.num2;
      console.log(`${input.num1} + ${input.num2} = ${result}`);
      break;
    case 'subtract': case '-':
      result = input.num1 - input.num2;
      console.log(`${input.num1} - ${input.num2} = ${result}`);
      break;
    case 'multiply': case '*':
      result = input.num1 * input.num2;
      console.log(`${input.num1} * ${input.num2} = ${result}`);
      break;
    case 'divide': case '/':
      result = input.num1 / input.num2;
      console.log(`${input.num1} / ${input.num2} = ${result}`);
      break;
  }

}


calculate(exampleAdditionInput);