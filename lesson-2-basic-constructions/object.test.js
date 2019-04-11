var car = {
  name: 'renault',
  model: 'stepway'
};
describe('object test', () => {
  test('car model must to be stepway', () => {
    expect(car.model).toBe('stepway');
  });
  test('car name must to be only renault', () => {
    expect(car.name).toBe('renault');
  });
});
