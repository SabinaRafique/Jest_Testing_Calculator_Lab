const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");


// SUM TESTS
describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => {
    expected = 5000;
    actual = sum (2000, 3000);
    expect(actual).toBe(expected);
    
  });

  test('can add two negative numbers (subtracting)', () => {
    expected = -13;
    actual = sum (-5, -8);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 5;
    actual = sum (5, 0);
    expect(actual).toBe(expected);
  });

  test('can add one positive and one negative number together', () => {
    expected = -7;
    actual = sum(-50, 43);
    expect(actual).toBe(expected);
  });

});


// SUBTRACT TESTS
describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 6;
    actual = subtract(8, 2);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => {
    expected = 43266;
    actual = subtract(500000, 456734);
    expect(actual).toBe(expected);
  });
  
  test('can subtract two negative numbers (adding)', () => {
    expected = -25;
    actual = subtract(-85, -60);
    expect(actual).toBe(expected);
  });

  test('can subtract a positive number from a negative number', () => {
    expected = -127;
    actual = subtract(-73, 54);
    expect(actual).toBe(expected);
  });

  test('can subtract a negative number from a positive number', () => {
    expected = 108;
    actual = subtract(75, -33);
    expect(actual).toBe(expected);
  });
});


// MULTIPLY TESTS
describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 6;
    actual = multiply(3, 2);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => {
    expected = 200448;
    actual = multiply(783, 256);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 36;
    actual = multiply(-12, -3);
    expect(actual).toBe(expected);
  });

  test('can multiply one positive and one negative number', () => {
    expected = 36;
    actual = multiply(-12, -3);
    expect(actual).toBe(expected);
  });
});



// DIVIDE TESTS
describe('divide', () => {

  test('can divide two small numbers', () => {
    expected = 4;
    actual = divide(8, 2);
    expect(actual).toBe(expected);
  });

  test('can divide two large numbers', () => {
    expected = 20;
    actual = divide(1000, 50);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 4;
    actual = divide(-80, -20);
    expect(actual).toBe(expected);
  });

  test('can divide a positive number from a negative number', () => {
    expected = -11;
    actual = divide(-55, 5);
    expect(actual).toBe(expected);
  });

  test('can divide a negative number from a positive number', () => {
    expected = -3;
    actual = divide(75, -25);
    expect(actual).toBe(expected);
  });

});



// MODULUS TESTS
describe('modulus', () => {

    test('can get the modulus of two small positive numbers', () => {
      expected = 1;
      actual = modulus(21, 4);
      expect(actual).toBe(expected);
    });

    test('can get the modulus of two large positive numbers', () => {
      expected = 89580;
      actual = modulus(564327, 474747);
      expect(actual).toBe(expected);
    });

    test('can get a modulus with no remainder (modulus = 0)', () => {
      expected = 0;
      actual = modulus(16, 4);
      expect(actual).toBe(expected);
    });

});



// EVEN TESTS
describe('even', () => {

  test('can test whether a positive number is even & return true', () => {
    actual = even(50);
    expect(actual).toBeTruthy();
  });

  test('can test whether a negative number is even & return true', () => {
    actual = even(-80);
    expect(actual).toBeTruthy();
  });

  test('can test whether a positive number is odd & return false', () => {
    actual = even(3);
    expect(actual).toBeFalsy();
  });

  test('can test whether a negative number is odd & return false', () => {
    actual = even(-63);
    expect(actual).toBeFalsy();
  });
});



// ODD TESTS
describe('odd', () => {

  test('can test whether a positive number is odd & return true', () => {
    actual = odd(33);
    expect(actual).toBeTruthy();
  });

  test('can test whether a negative number is odd & return true', () => {
    actual = odd(-29);
    expect(actual).toBeTruthy();
  });

  test('can test whether a positive number is even & return false', () => {
    actual = odd(8);
    expect(actual).toBeFalsy();
  });

  test('can test whether a negative number is even & return false', () => {
    actual = odd(-100);
    expect(actual).toBeFalsy();
  });
});

