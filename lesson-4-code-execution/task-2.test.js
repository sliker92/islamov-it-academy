const multiplyNumeric = require('./task-2');
describe('multiplyNumeric', () => {
  test('multply Number type in object on 2', () => {
    var image = {
      width: 300,
      height: 600,
      title: 'Avatar'
    };
    multiplyNumeric(image);
    expect(image.width).toEqual(600);
    expect(image.height).toEqual(1200);
    expect(image.title).toEqual('Avatar');
  });
});
