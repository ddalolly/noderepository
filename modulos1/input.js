const readline = require('readline-sync');

const getInput = () => {
  const operation = readline.question('Enter an operation (+, -, *, /): ');
  const num1 = parseFloat(readline.question('Enter the first number: '));
  const num2 = parseFloat(readline.question('Enter the second number: '));

  return [operation, num1, num2];
};

module.exports = {
  getInput
};
