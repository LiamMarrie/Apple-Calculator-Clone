const calculator = {
    display: document.getElementById('display'),
    buttons: document.getElementById('buttons'),
    clear: document.getElementById('clear'),
    decimal: document.getElementById('decimal'),
    equals: document.getElementById('equals'),
    operator: document.getElementsByClassName('operator'),
    number: document.getElementsByClassName('number'),
    currentOperator: '',
    currentNumber: '',
    result: 0,
};

function operate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    }
}

calculator.buttons.addEventListener('click', function (event) {
    if (event.target.classList.contains('number')) {
        calculator.currentNumber += event.target.value;
        calculator.display.value = calculator.currentNumber;
    } else if (event.target.classList.contains('operator')) {
        calculator.currentOperator = event.target.value;
        calculator.result = parseFloat(calculator.display.value);
        calculator.currentNumber = '';
    } else if (event.target.id === 'clear') {
        calculator.currentNumber = '';
        calculator.result = 0;
        calculator.display.value = 0;
    } else if (event.target.id === 'decimal') {
        if (!calculator.currentNumber.includes('.')) {
            calculator.currentNumber += '.';
            calculator.display.value = calculator.currentNumber;
        }
    } else if (event.target.id === 'equals') {
        calculator.result = operate(calculator.result, calculator.currentNumber, calculator.currentOperator);
        calculator.currentOperator = '';
        calculator.currentNumber = '';
        calculator.display.value = calculator.result;
    }
});