describe('string test', () => {
  test('est is a part of Test', () => {
    expect('Test').toMatch(/est/);
  });
});
