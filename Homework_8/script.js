'use strict'

// Решение без *

function makeFibonacciFunction() {
  let firstNumber = 1;
  let secondNumber = 0;
  function сalculatFibonacciNumber() {
    secondNumber += firstNumber;
    firstNumber = secondNumber - firstNumber;
    return secondNumber
  }
  return сalculatFibonacciNumber;
  while (confirm('Проведем итерацию?')) {
    console.log(fibonacci());
}

const fibonacci = makeFibonacciFunction();

while (confirm('Проведем итерацию?')) {
  console.log(fibonacci());
}