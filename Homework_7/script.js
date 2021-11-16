'use strict'

alert (`Вас приветствует программа \'Ущербный калькулятор\'!\nСледуйте указаниям всплывающих окон.`)

let firstNumber = prompt (`Введите первое число \n(любое от -1000 до 1000)\n [для десятичных чисел используйте в качестве разделителя .]`);

if ((validityCheck(+firstNumber) == false) || (firstNumber == null) || (firstNumber == NaN)) {
  firstNumber = prompt (`Введите первое число \n(любое от -1000 до 1000)\n [для десятичных чисел используйте в качестве разделителя .]`)
} else {
  firstNumber = +firstNumber
}
const mathOperator = prompt (`Какое действие Вы хотите совершить: + - * / ?`)
const secondNumber = +(prompt (`Введите второе число \n(любое от -1000 до 1000)\n [для десятичных чисел используйте в качестве разделителя .]`))
if (validityCheck(secondNumber) == false) throw Error();
let result;

switch (mathOperator) {
  case '+':
    result = firstNumber + secondNumber;
    break;
  case '-':
    result = firstNumber - secondNumber;
    break;
  case '*':
    result = firstNumber * secondNumber;
    break;
  case '/':
    result = firstNumber / secondNumber;
    break;
  default: {
    console.log(`Оператор ${mathOperator} мной ещё не поддерживается`);
    throw Error()
  }
}

console.log(`${firstNumber} ${mathOperator} ${secondNumber} = ${result}`)


function validityCheck (num) {
  if (!isNaN(num) && ((num < -1000) || (num > 1000))) {
    alert (`Программа не поддерживает работу с этим типом данных`);
    return (false)
  }
}
