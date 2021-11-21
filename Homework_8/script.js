'use strict'

// Решение без *-------------------------------------------------------

// Вариант 1

// function makeFibonacciFunction(firstNumber = 1, secondNumber = 0) {
//   return function сalculatFibonacciNumber() {
//     secondNumber += firstNumber;
//     firstNumber = secondNumber - firstNumber;
//     return secondNumber
//   }
// }

// Вариант 2

// function makeFibonacciFunction(firstNumber = 1, secondNumber = 0) {
//   return () => {
//     secondNumber += firstNumber;
//     firstNumber = secondNumber - firstNumber;
//     return secondNumber
//   }
// }

// const fibonacci = makeFibonacciFunction();

// Решение со *----------------------------------------------------------

const fibonacci = (firstNumber = 1, secondNumber = 0) => () => {
    secondNumber += firstNumber;
    firstNumber = secondNumber - firstNumber;
    return secondNumber;
    };

// Вывод в консоль--------------------------------------------------------
while (confirm('Проведем итерацию?')) {
  console.log(fibonacci() );
}