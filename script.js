const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const numbers = document.querySelectorAll(".number");

const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number;
    } else {
        currentNumber += number;
    } 
}

numbers.forEach( (number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
});

/*operator button*/
const operators = document.querySelectorAll(".operator");

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) =>
    inputOperator(event.target.value));
});

/*equal button*/
const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
});

/*calculate*/
const calculate = () => {
    let result = '';
    let a = parseFloat(prevNumber);
    let b = parseFloat(currentNumber);
    switch (calculationOperator){
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        result = a / b;
        break;
    default:
        return;
    }
    currentNumber = result;
    calculationOperator = '';
}

/*percentage button*/
const percentageBtn = document.querySelector('.percentage');

const inputPercentage = () => {
    currentNumber = parseFloat(currentNumber) / 100;
}

percentageBtn.addEventListener('click', () => {
    inputPercentage();
    updateScreen(currentNumber);
})

/*clear button*/
const clearBtn = document.querySelector('.all-clear');

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})


/*decimal*/
const decimal = document.querySelector('.decimal');

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
} )