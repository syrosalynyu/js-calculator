const exampleAdditionInput = {
  num1: -3,
  num2: 5,
  operation: 'add',
};

const calculate = function(input) {
  // when Object is empty
  if (Object.keys(input).length === 0) {
    console.log('Your input is empty! Please try again.');
    return false;
  }

  // validate num1 and num2. Both need to be numbers
  if (typeof input.num1 !== 'number' || typeof input.num2 !== 'number' ) {
    console.log('Please provide valid number(s)!');
    return false;
  }

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

}


calculate(exampleAdditionInput);