var a;
var b = null;
describe('undefined test', () => {
  test('undefined var a, b not undefined', () => {
    expect(a).toBeUndefined();
    expect(b).not.toBeUndefined();
  });
});
