function LocalStorage(key) {
  var self = this;
  self.info = {};

  if (localStorage.getItem(key)) {
    if (key == "dish") {
      var object = JSON.parse(localStorage.dish);
      self.info = object;
    } if (key == "drink") {
      object = JSON.parse(localStorage.drink);
      self.info = object;
    }
  }

  self.AddValue = function(key, value) {
    self.info[key] = value;
  };

  self.GetValue = function(key) {
      return self.info[key];
  };

  self.DeleteValue = function(key) {
      delete self.info[key];
      return self.info[key];
  };

  self.GetKeys = function() {
    var keys = [];
    for (var i in self.info) {
      keys.push(" " + i);
    }
    return keys;
  };

  self.Store = function() {
    localStorage.setItem(key, JSON.stringify(self.info));
  }
}
