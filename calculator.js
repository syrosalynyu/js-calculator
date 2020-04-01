const exampleAdditionInput = {
  num1: -3,
  num2: '5',
  operation: 'add',
};

const objectCantBeEmpty = function(input) {
  if (Object.keys(input).length === 0) {
    console.log('Your input is empty! Please try again.');
    return false;
  }
}

const mustBeNumber = function(input) {
  if (typeof input.num1 !== 'number' || typeof input.num2 !== 'number' ) {
    console.log('Please provide valid number(s)!');
    return false;
  }
}



const calculate = function(input) {
  // when Object is empty
  // if (Object.keys(input).length === 0) {
  //   console.log('Your input is empty! Please try again.');
  //   return false;
  // }
  objectCantBeEmpty(input)

  // validate num1 and num2. Both need to be numbers
  // if (typeof input.num1 !== 'number' || typeof input.num2 !== 'number' ) {
  //   console.log('Please provide valid number(s)!');
  //   return false;
  // }
  mustBeNumber(input)

  // denominator can't be 0
  if (input.num2 === 0) {
    console.log('Denominator can\'t be 0!');
    return false
  }

  //validate the operation. Must be one of the following
  if (input.operation !== 'add' &&
      input.operation !== '+' &&
      input.operation !== 'subtract' &&
      input.operation !== '-' &&
      input.operation !== 'multiply' &&
      input.operation !== '*' &&
      input.operation !== 'divide' &&
      input.operation !== '/'
  ) { 
    console.log('Please provide valid operator!');
    return false;
  }

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