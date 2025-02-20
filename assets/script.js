// Variables
const numbers = Array.from(document.getElementsByClassName('num'));
const operators = Array.from(document.getElementsByClassName('operators'));
const clearButton = document.getElementById('clearbtn');
const subfield = document.getElementById('subfield');
const delbutton = document.getElementById('delbtn');
const textfield = document.getElementById('textfield');
const executebutton = document.getElementById('execute');

// Function declarations
const addEventListeners = (elements, event, handler) => {
    elements.forEach(element => {
        element.addEventListener(event, handler);
    });
};

const numInput = (e) => {
    if (textfield.innerHTML.length < 15) {
        let value = e.target.innerHTML;
        textfield.innerHTML += value;
    } else {
        return;
    }
};

const subInput = (e) => {
    if (textfield.innerHTML.length > 0 && subfield.innerHTML === "") {
        const value = textfield.innerHTML;
        clear();
        subfield.innerHTML = value + e.target.innerHTML;
    }
};

const calculate = () => {
    if (textfield.innerHTML.length > 0 && subfield.innerHTML.length > 0 && !isNaN(parseFloat(textfield.innerHTML))) {
        let value = subfield.innerHTML;
        let opt = value.at(-1);
        let value1 = parseFloat(value.slice(0, value.length - 1));
        let value2 = parseFloat(textfield.innerHTML);

        switch (opt) {
            case '+':
                return add(value1, value2);
            case '-':
                return subtract(value1, value2);
            case 'x':
                return multiply(value1, value2);
            case '/':
                return divide(value1, value2);
            default:
                return undefined;
        }
    }
};

const clear = () => {
    textfield.innerHTML = "";
    subfield.innerHTML = "";
};

const del = () => {
    if (textfield.innerHTML.length > 0) {
        let value = textfield.innerHTML;
        textfield.innerHTML = value.slice(0, -1);
    }
};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const showOutput = () => {
    let result = calculate();
    result = Number.parseFloat(result.toFixed(3))
    if (typeof result === 'number') {
        clear();
        if (!isNaN(result) && result.toString().length <= 15) {
            textfield.innerHTML = result;
        } else if (!isNaN(result) && result.toString().length > 15) {
            textfield.innerHTML = 'overflow';
        } else {
            textfield.innerHTML = 'undefined';
        }
    }
};

// Running code
addEventListeners(numbers, 'click', numInput);
addEventListeners(operators, 'click', subInput);
clearButton.addEventListener('click', clear);
delbutton.addEventListener('click', del);
executebutton.addEventListener('click', showOutput);

