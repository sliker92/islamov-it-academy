// (1.40) Арифметические операции
var a = 3;
var b = 2;
var c = 4
describe('Arithmetic operations tests', () => {
  test('3 plus 2 equal 5', () => {
    expect(a + b).toEqual(5);
  });
  test('3 subtract 2 equal 1', () => {
    expect(a - b).toEqual(1);
  });
  test('3 multiply 2 equal 6', () => {
    expect(a * b).toEqual(6);
  });
  test('3 divided by 2 equal 1.5', () => {
    expect(a / b).toEqual(1.5);
  });
  test('3 divided by 2 remain 1', () => {
    expect(a % b).toEqual(1);
  });
  test('-a equal -3', () => {
    expect(-a).toEqual(-3);
  });
  test('--a equal -2', () => {
    expect(--a).toEqual(2);
    expect(--a).toEqual(1);
  });
  test('++a equal 4', () => {
    expect(++a).toEqual(2);
    expect(++a).toEqual(3);
  });
  test('assignment 3 plus 4 equal 7', () => {
    expect(a += c).toEqual(7);
  });
  test('assignment 3 subtract 4 equal 3', () => {
    expect(a -= c).toEqual(3);
  });
  test('assignment 3 multiply 4 equal 12', () => {
    expect(a *= c).toEqual(12);
  });
  test('assignment 3 divided 4 equal 3', () => {
    expect(a /= c).toEqual(3);
  });
});

