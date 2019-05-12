var func = require('./task-2');

describe('for task-2 positive tests', () => {
  test('string is pal or not', () => {
    var test1 = 'Anna';
    var test2 = 'А роза упала на лапу Азора';
    var test3 = 'Вася';
    var test4 = '12321';
    var test5 = '123212';
    expect(func(test1)).toBeTruthy();
    expect(func(test2)).toBeTruthy();
    expect(func(test3)).toBeFalsy();
    expect(func(test4)).toBeTruthy();
    expect(func(test5)).toBeFalsy();
  });
});

describe('for task-2 negative tests', () => {
  test('if arguments are wrong', () => {
    var wrong1 = NaN;
    var wrong2 = undefined;
    var wrong3 = null;
    var wrong4 = '';
    expect(func(wrong1)).toBeFalsy();
    expect(func(wrong2)).toBeFalsy();
    expect(func(wrong3)).toBeFalsy();
    expect(func(wrong4)).toBeTruthy();
  });
});