describe('boolean test', () => {
  test('true or false for a', () => {
    expect(true).toBeTruthy();
    expect(undefined).toBeFalsy();
    expect(null).toBeFalsy();
    expect('').toBeFalsy();
  });
});
