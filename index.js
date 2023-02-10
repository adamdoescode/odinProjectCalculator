
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
}

function generateOperators() {
    const board = document.querySelector('.operators');
    const operators = ['+', '-', '*', '/'];
    operators.forEach((operator) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = operator;
        board.appendChild(cell);
    })
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
    display.textContent += this.textContent;
}

function clearScreen() {
    const display = document.querySelector('.displayInput');
    display.textContent = '';
}

function addClickHandle() {
    // adds click handle to everything that hass cell class
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('click', handleClick);
    })
}

generateNumbers();
generateOperators();
// call this function AFTER generating all cells
addClickHandle();
