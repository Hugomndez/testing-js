const { sum, multiply, divide } = require('./02-math');

describe('Test for math', () => {
  describe('Test for sum', () => {
    test('adds 1 + 3 should be 4', () => {
      const res = sum(1, 3);
      expect(res).toBe(4);
    });
  });

  describe('Test for multiply', () => {
    test('should be 4', () => {
      const res = multiply(1, 4);
      expect(res).toBe(4);
    });
  });

  describe('Test for divide', () => {
    test('should divide', () => {
      const res1 = divide(6, 3);
      expect(res1).toBe(2);
      const res2 = divide(5, 2);
      expect(res2).toBe(2.5);
    });

    test('should divide for zero', () => {
      const res1 = divide(6, 0);
      expect(res1).toBeNull();
      const res2 = divide(5, 0);
      expect(res2).toBeNull();
    });
  });
});
