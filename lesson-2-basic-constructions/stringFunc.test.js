// (3.40) Предописанный класс String
describe('String func tests', () => {
  test('length', () => {
    expect('doing homework'.length).toEqual(14);
  });
  test('char 2 equal i', () => {
    expect('doing homework'.charAt(2)).toBe('i');
    expect('doing homework'[2]).toBe('i');
  });
  test('substr and slice', () => {
    expect('doing homework'.substr(0,5)).toBe('doing');
    expect('doing homework'.slice(0,10)).toBe('doing home');
  });
  test('split doing homework for >=0 spaces and return one string ', () => {
    expect('doing homework'.split(' ', 1)).toEqual(['doing']);
  });
  test('upper and lower cases', () => {
    expect('doing homework'.toUpperCase()).toBe('DOING HOMEWORK');
    expect('DOING HOMEWORK'.toLowerCase()).toBe('doing homework');
  });
  test('index of o', () => {
    expect('doing homework'.indexOf('o')) .toBe(1);
    expect('doing homework'.indexOf('o', 2)) .toBe(7);
    expect('doing homework'.indexOf('o', 12)) .toBe(-1);
    expect('doing homework'.lastIndexOf('o')) .toBe(11);
  });
  test('replace home on school', () => {
    expect('doing homework'.replace('home', 'school')) .toBe('doing schoolwork');
  });
});