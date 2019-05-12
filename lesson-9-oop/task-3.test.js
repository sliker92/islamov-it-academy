var func = require('./task-3');

describe('for task-3 positive tests', () => {
  test('delete anagrams from array', () => {
    var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
    expect(func(arr)).toEqual(["ЗОВ", "гробик", "сектор"]);
  });
});
