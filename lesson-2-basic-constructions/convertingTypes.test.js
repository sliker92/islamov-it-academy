// (1.62) Преобразование типов и проверка результата
// Преобразование из строкового в числовой тип
var weight = 78;
describe('contverting different types with func', () => {
  test('converting 2.5 blocks', () => {
    expect(parseInt('2.5 blocks')).toBe(2);
    expect(parseFloat('2.5 blocks')).toBe(2.5);
  });
  test('converting 78kg from string to number', () => {
    expect(Number('78')).toBe(78);
    expect(Number('78kg')).toBe(NaN);
    expect(isNaN('78')).toBeTruthy;
    expect(isNaN('78kg')).toBeFalsy;
    expect(isFinite('78')).toBeTruthy;
    expect(isFinite('78kg')).toBeFalsy;
  });
  test('converting 78 from number to string', () => {
    expect(String(78) + 'kg').toBe('78kg');
    expect(weight.toString() + 'kg').toBe('78kg');
  });
  test('converting 78 to boolean type', ( ) => {
    expect(Boolean('78kg')).toBeTruthy;
    expect(Boolean(undefined)).toBeFalsy;
    expect(Boolean(NaN)).toBeFalsy;
  });
});
