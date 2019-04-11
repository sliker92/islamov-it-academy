// (3.25) Предсозданный объект Math
describe('Math func tests', () => {
  test('pi', () => {
    expect(Math.PI).toBe(3.141592653589793);
  });
  test('abs from -6.1 = 6.1', () => {
    expect(Math.abs(-6.1)) .toBe(6.1);
  });
  test('2 greeter than 1', () => {
    expect(Math.max(1, 2)) .toBe(2);
    expect(Math.min(1, 2)) .toBe(1);
    expect(Math.max('1', '2')).toBe(2);
    expect(Math.max('me', null)).toBe(NaN);
  });
  test('round 2.3', () => {
    expect(Math.round(2.3)) .toBe(2);
    expect(Math.ceil(2.3)) .toBe(3  );
    expect(Math.floor(2.3)) .toBe(2);
    expect(Math.floor('2.3')) .toBe(2);
    expect(Math.floor(undefined)) .toBe(NaN);
  });
  test('sqrt from 4 is 2', () => {
    expect(Math.sqrt(4)) .toBe(2);
  });
  test('random number from 0 < 1', () => {
    expect(Math.random()) .toBeLessThan(1);
  });
  test('sin 20rad equal 0.9129452507276277', () => {
    expect(Math.sin(20)) .toBe(0.9129452507276277);
  });
});
