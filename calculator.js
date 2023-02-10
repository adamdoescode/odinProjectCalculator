
function add(...args) {
    return args.reduce((a, b) => a + b, 0);
}

function subtract(...args) {
    return args.reduce((a, b) => a - b);
}

function multiply(...args) {
    return args.reduce((a, b) => a * b, 1);
}

function divide(...args) {
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
    return operations[operator](...args);
}

module.exports = {
    add, subtract, multiply, divide
}
