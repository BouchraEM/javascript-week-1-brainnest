function findLarger(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}

const number1 = 5;
const number2 = 10;

console.log(`The larger number is ${findLarger(number1, number2)}`);

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

const number = 7;

console.log(`The number is ${checkEvenOdd(number)}`);
