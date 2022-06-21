let para = document.getElementById('name')

let operator = prompt('Enter operator ( either +, -, * or / ): ');
let number1 = Number(prompt('Enter first number: '));
let number2 = Number(prompt('Enter second number: '));

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

let answer = `Result: ${number1} ${operator} ${number2} = ${result}`;

para.innerText = answer;