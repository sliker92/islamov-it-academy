function THashStorage() {
  var self = this;
  self.info = {};
  self.AddValue = function(key,value) {
    self.info[key] = value;
  };

  self.GetValue = function(key) {
    if (key in self.info)
    {
      return self.info[key];
    } else {
      return false;
    }
  };

  self.DeleteValue = function(key) {
    if (key in self.info) {
      delete self.info[key];
      return true;
    } else {
      return false;
    }
  };

  self.GetKeys = function() {
    return Object.keys(self.info)
  };
}

