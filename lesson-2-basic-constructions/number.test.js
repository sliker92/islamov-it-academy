var a = 1 + 6;
describe('number test', () => {
  test('compare one plus six', () => {
    expect(a).toBeGreaterThan(6);
    expect(a).toBeGreaterThanOrEqual(7);
    expect(a).toBeLessThan(8);
    expect(a).toBeLessThanOrEqual(7);
  });
});
