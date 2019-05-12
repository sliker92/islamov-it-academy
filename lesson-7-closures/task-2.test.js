const interviewQuestion = require('./task-2');

describe('interviewQuestion test func', () => {
  test('func must return right log', () => {
    expect(interviewQuestion('teacher')('John')).toBe(console.log('What subject do you teach John?'));
  });
  test('func with wrong(without) argument must return right log', () => {
    expect(interviewQuestion()(123)).toBe(console.log('wrong arguments!!!'));
  });
});
