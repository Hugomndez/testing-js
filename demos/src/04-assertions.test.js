// matchers

test('test obj', () => {
  const data = { name: 'nico' };
  data.lastName = 'molina';
  expect(data).toEqual({ name: 'nico', lastName: 'molina' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('Christoph').toMatch(/stop/);
});

test('list / arrays', () => {
  const num = [1, 2, 3, 4];
  expect(num).toContain(3);
});
