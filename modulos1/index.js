const input = require('./input');
const operations = require('./operations');

const calculator = () => {
  const [operation, num1, num2] = input.getInput();

  let result;

  switch (operation) {
    case '+':
      result = operations.add(num1, num2);
      break;
    case '-':
      result = operations.subtract(num1, num2);
      break;
    case '*':
      result = operations.multiply(num1, num2);
      break;
    case '/':
      result = operations.divide(num1, num2);
      break;
    default:
      console.log('Invalid operation');
      return;
  }

  console.log(`The result is: ${result}`);
};

calculator();
