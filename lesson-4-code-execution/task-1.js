function taskCompletedFunc() {
  var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
  };
  var maxTasks = 0;
  for (var name in tasksCompleted) {
    if (maxTasks < tasksCompleted[name]) {
      maxTasks = tasksCompleted[name];
    }
  }
  return name;
}
module.exports = taskCompletedFunc;
