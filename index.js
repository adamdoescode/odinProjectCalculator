
// old calculator.js functions now here
// too lazy to figure out how to make a module

const operators = ['+', '-', '*', '/'];

function add(...args) {
    // convert all args to numbers
    args = args.map((arg) => Number(arg));
    return args.reduce((a, b) => a + b, 0);
}

function subtract(...args) {
    // convert all args to numbers
    args = args.map((arg) => Number(arg));
    return args.reduce((a, b) => a - b);
}

function multiply(...args) {
    // convert all args to numbers
    args = args.map((arg) => Number(arg));
    return args.reduce((a, b) => a * b, 1);
}

function divide(...args) {
    // convert all args to numbers
    args = args.map((arg) => Number(arg));
    return args.reduce((a, b) => a / b);
}

function operate(operator, ...args) {
    // check what operator we have
    // and call the appropriate function
    const operations = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide
    }
    console.log(operations[operator](...args))
    return operations[operator](...args);
}


// generate 9 digit divs for the board
function generateNumbers() {
    const board = document.querySelector('.numbersGrid');
    let calculatorButtonNumber = 1;
    for (let row = 0; row < 3; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        rowDiv.id = `row${row}`;
        for (let column = 0; column < 3; column++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.id = `${column}${column}`;
            cell.addEventListener('click', handleClick);
            cell.textContent = `${calculatorButtonNumber}`;
            rowDiv.appendChild(cell);
            calculatorButtonNumber += 1;
        }
        board.appendChild(rowDiv);
    }
    return;
}

function generateOperators() {
    const board = document.querySelector('.operators');
    operators.forEach((operator) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = operator;
        board.appendChild(cell);
    })
    return;
}

function handleClick() {
    // take in the value of the cell
    // add it to the display
    const display = document.querySelector('.displayInput');
    // clear screen if text == "Clear"
    if (this.textContent == 'Clear') {
        clearScreen();
        return;
    }
    // calculate from screen if text == "="
    if (this.textContent == ' = ') {
        translateForOperate();
        return;
    }
    //check if operator symbol in text
    if (operators.includes(this.textContent)) {
        // add a space before + after each input
        display.textContent += ` ${this.textContent} `;
        return;
    }
    display.textContent += this.textContent;
    return;
}

function translateForOperate() {
    // get the display text
    const display = document.querySelector('.displayInput');
    const displayText = display.textContent;
    // check if empty string
    if (displayText == '') {
        return;
    }
    // split the text into an array
    const displayArray = displayText.split(' ');
    console.log(displayArray);
    console.log(displayArray.length);
    // check if array length is 3
    if (displayArray.length == 3) {
        inputOperator = displayArray[1];
        inputNum1 = displayArray[0];
        inputNum2 = displayArray[2];
        console.log(inputOperator, inputNum1, inputNum2)
        clearScreen()
        display.textContent = operate(inputOperator, inputNum1, inputNum2);
    }
    return;
}

function clearScreen() {
    const display = document.querySelector('.displayInput');
    display.textContent = '';
    return;
}

function addClickHandle() {
    // adds click handle to everything that hass cell class
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('click', handleClick);
    })
    return;
}

function generateCalculator() {
    generateNumbers();
    generateOperators();
    // call this function AFTER generating all cells
    addClickHandle();
}

generateCalculator();

