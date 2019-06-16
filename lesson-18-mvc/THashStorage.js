function THashStorage() {
  var self = this;
  self.info = {};
  self.AddValue = function(key,value) {
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
    return Object.keys(self.info);
  };
}
