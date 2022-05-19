describe('Group 1', () => {
  beforeAll(() => {
    console.log('beforeAll');
    // up db
  });
  afterAll(() => {
    console.log('afterAll');
    // up db
  });
  beforeEach(() => {
    console.log('beforeEach');
  });
  afterEach(() => {
    console.log('afterEach');
  });
  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });

  describe('Group 2', () => {
    beforeAll(() => {
      console.log('beforeAll');
      // up db
    });
    test('case 3', () => {
      console.log('case 3');
      expect(1 + 1).toBe(2);
    });
    test('case 4', () => {
      console.log('case 4');
      expect(1 + 3).toBe(4);
    });
  });
});
