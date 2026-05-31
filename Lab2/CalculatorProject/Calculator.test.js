const Calculator = require('./Calculator');

describe('Calculator Tests', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  // ====== BASIC TESTS (6 tests: 4 pass, 2 fail) ======

  test('Test_Add_ValidInputs', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('Test_Subtract_ValidInputs', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('Test_Multiply_ValidInputs', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });

  test('Test_Divide_ValidInputs', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test('Test_Add_FailCase', () => {
    expect(calculator.add(2, 3)).toBe(10); // FAIL: 2+3=5, not 10
  });

  test('Test_Multiply_FailCase', () => {
    expect(calculator.multiply(3, 4)).toBe(20); // FAIL: 3*4=12, not 20
  });

  // ====== BONUS TASK 1: PARAMETERIZED TESTS ======

  describe('Parameterized Add Tests', () => {
    test.each([
      [2, 3, 5],
      [10, 5, 15],
      [0, 0, 0],
      [100, 50, 150],
      [-5, 5, 0],
      [-10, -20, -30]
    ])('add(%i, %i) should return %i', (a, b, expected) => {
      expect(calculator.add(a, b)).toBe(expected);
    });
  });

  describe('Parameterized Subtract Tests', () => {
    test.each([
      [5, 3, 2],
      [10, 10, 0],
      [100, 50, 50],
      [0, 5, -5],
      [-5, -10, 5]
    ])('subtract(%i, %i) should return %i', (a, b, expected) => {
      expect(calculator.subtract(a, b)).toBe(expected);
    });
  });

  describe('Parameterized Multiply Tests', () => {
    test.each([
      [3, 4, 12],
      [5, 5, 25],
      [10, 0, 0],
      [7, 8, 56],
      [-2, 3, -6]
    ])('multiply(%i, %i) should return %i', (a, b, expected) => {
      expect(calculator.multiply(a, b)).toBe(expected);
    });
  });

  describe('Parameterized Divide Tests', () => {
    test.each([
      [6, 3, 2],
      [10, 2, 5],
      [20, 4, 5],
      [100, 10, 10],
      [7, 1, 7]
    ])('divide(%i, %i) should return %i', (a, b, expected) => {
      expect(calculator.divide(a, b)).toBe(expected);
    });
  });

  // ====== BONUS TASK 2: EXCEPTION HANDLING TESTS ======

  describe('Exception Handling Tests', () => {
    test('divide_by_zero_throws_error', () => {
      expect(() => {
        calculator.divide(10, 0);
      }).toThrow("Cannot divide by zero");
    });

    test('divide_by_zero_throws_any_error', () => {
      expect(() => {
        calculator.divide(5, 0);
      }).toThrow();
    });

    test('power_with_invalid_base_throws_error', () => {
      expect(() => {
        calculator.power("invalid", 2);
      }).toThrow("Both base and exponent must be numbers");
    });

    test('power_with_valid_inputs_succeeds', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('power_parameterized_tests', () => {
      expect(calculator.power(2, 2)).toBe(4);
      expect(calculator.power(3, 3)).toBe(27);
      expect(calculator.power(10, 0)).toBe(1);
    });
  });
});