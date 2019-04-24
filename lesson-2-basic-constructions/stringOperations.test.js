// (1.45) Строковые операции
var a = 'space';
describe('Sting operations tests', () => {
  test('nice + weather toBe nice weather', () => {
    expect('nice' + ' weather') .toBe('nice weather');
  });
  test('3 subtract 2 equal 1', () => {
    expect(a += 'ship').toBe('spaceship');
  });
});
