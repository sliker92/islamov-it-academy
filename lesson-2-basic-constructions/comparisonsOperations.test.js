// (1.60) Операции сравнения и логические операции
// Операции сравнения
var a = 2;
var b = 3;
var c = 2;
var d = null;
describe('Comparisons operations tests', () => {
  test('2 less than 3', () => {
    expect(a < b).toBeTruthy();
    expect(a <= b).toBeTruthy();
    expect(a > b).toBeFalsy();
    expect(a >= b).toBeFalsy();
  });
  test('Comparison with null', () => {
    expect(null == null).toBeTruthy();
    expect('null' == null).toBeFalsy();
    expect('null' === null).toBeFalsy();
  });
  test('Comparison with null and undefined', () => {
    expect(null !== undefined).toBeTruthy();
    expect(null != undefined).toBeFalsy();
  });
  test('Comparison with && and ||', () => {
    expect(a && c).toBeTruthy();
    expect(a || undefined).toBeTruthy();
  });
  test('a is true', () => {
    expect(!d).toBeTruthy();
  });
});
