
 // jest testing of calculator.js
/**
 * @jest-environment jsdom
 */

 test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });


const calculator = require('./index');

test('add 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
})

test('subtract 2 - 1 to equal 1', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
})

test('multiply 2 * 3 to equal 6', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
})

test('divide 6 / 3 to equal 2', () => {
    expect(calculator.divide(6, 3)).toBe(2);
})

// test the operate function

test('operate function: add 1 + 2 to equal 3', () => {
    expect(calculator.operate('+', 1, 2)).toBe(3);
})

test('operate function: subtract 2 - 1 to equal 1', () => {
    expect(calculator.operate('-', 2, 1)).toBe(1);
})

test('operate function: multiply 2 * 3 to equal 6', () => {
    expect(calculator.operate('*', 2, 3)).toBe(6);
})

test('operate function: divide 6 / 3 to equal 2', () => {
    expect(calculator.operate('/', 6, 3)).toBe(2);
})
