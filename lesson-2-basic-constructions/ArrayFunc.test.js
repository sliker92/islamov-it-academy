// (3.55) Предописанный класс Array
var band1 = ['Bogdan', 'Oleg'];
var band2 = ['Mark', 'Alex'];
describe('Array func tests', () => {
  test('array length equal 2', () => {
    expect(band1.length).toEqual(2);
  });
  test('add band1 to band2', () => {
    expect(band1.concat(band2)).toEqual(['Bogdan', 'Oleg', 'Mark', 'Alex']);
  });
  test('band1 in one string', () => {
    expect(band1.join('')).toEqual('BogdanOleg');
  });
  test('add Misha to band1', () => {
    expect(band1.push('Misha')).toEqual(3);
  });
  test('delete oleg from band1', () => {
    expect(band1.pop()).toEqual('Misha');
  });
  test('add Victor to band2', () => {
    expect(band2.unshift('Victor')).toEqual(3);
  });
  test('delete Victor to band2', () => {
    expect(band2.shift('Victor')).toEqual('Victor');
  });
  test('delete Misha from band1', () => {
    expect(band1.splice(0, 1)).toEqual(['Bogdan']);
  });
  test('sort array like string(by first number to second)', () => {
    expect([1, 41, 12, 5, 2].sort()).toEqual([1, 12, 2, 41, 5]);
  });
});
