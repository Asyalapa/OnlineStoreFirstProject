'use strictlet'

let numFromPrompt, mathOperator;

alert (`Вас приветствует программа \'Ущербный калькулятор\'!\nСледуйте указаниям всплывающих окон.`)

numFromPrompt = prompt (`Введите первое число \n [для десятичных чисел используйте в качестве разделителя .]`);
exit(numFromPrompt);
while(!validityCheck(numFromPrompt)) {
  numFromPrompt = prompt (`Введите первое число`);
};
const firstNumber = Number(numFromPrompt);

mathOperator = prompt (`Какое действие Вы хотите совершить: + - * / ?`);
exit(mathOperator);
while ((mathOperator != `+`) && (mathOperator != `-`) && (mathOperator != `*`) && (mathOperator != `/`)) {
  mathOperator = prompt (`Какое действие Вы хотите совершить (из предложенных): + - * / ?`);
};

numFromPrompt = prompt (`Введите второе число \n [для десятичных чисел используйте в качестве разделителя .]`);
exit(numFromPrompt);
while(!validityCheck(numFromPrompt)) {
  numFromPrompt = prompt (`Введите второе число`);
};
const secondNumber = Number(numFromPrompt);

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
}

console.log(`${firstNumber} ${mathOperator} ${secondNumber} = ${result}`)


function validityCheck(num) {
  if (num == '') {
    return false;
  } else if (isFinite(Number(num))) {
    return true;
  } else return false;
};

function exit(num) {
  if (!num) {
    let question = confirm ('Вы хотите закрыть приложение?');
    if (question) throw Error();
  };
}
