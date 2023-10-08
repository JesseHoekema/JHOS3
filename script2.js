document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');
    let currentInput = '';
    let operator = '';
    let firstNumber = '';

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const buttonValue = button.innerText;

            if (buttonValue === 'C') {
                clearDisplay();
            } else if (buttonValue === '=') {
                evaluate();
            } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
                setOperator(buttonValue);
            } else {
                addToDisplay(buttonValue);
            }
        });
    });

    function addToDisplay(value) {
        currentInput += value;
        display.value = currentInput;
    }

    function clearDisplay() {
        currentInput = '';
        operator = '';
        firstNumber = '';
        display.value = '';
    }

    function setOperator(op) {
        operator = op;
        firstNumber = currentInput;
        currentInput = '';
    }

    function evaluate() {
        const secondNumber = currentInput;
        let result = 0;

        switch (operator) {
            case '+':
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case '-':
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case '*':
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case '/':
                result = parseFloat(firstNumber) / parseFloat(secondNumber);
                break;
        }

        clearDisplay();
        currentInput = result.toString();
        display.value = result;
    }
});
