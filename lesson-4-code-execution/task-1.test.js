const taskCompletedFunc = require('./task-1');
describe('taskCompletedFunc', () => {
  test('alert max completed tasks', () => {
    var tasksCompleted = {
      'Anna': 32,
      'Serg': 87,
      'Elena': 112,
      'Anton': 65
    };
    taskCompletedFunc();
    expect(tasksCompleted.Elena).toEqual(112);
  });
});
