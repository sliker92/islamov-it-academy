function TAJAXStorage(type) {
  var self = this;
  self.hashStorage = {}; // элемент массива - коктейль : {алкогольный: да, состав: виски};
  $.ajax('http://fe.it-academy.by/AjaxStringStorage2.php', {
    type: 'POST',
    cache: false,
    dataType: 'json',
    data: {f: 'READ', n: 'Islamov_TAJAXStorage'},
    success: DataLoadedRead,
    error: ErrorHandler
  });

  function DataLoadedRead(data) {
    if (data !== ' ') {
      self.hashStorage = JSON.parse(data.result);
      console.log('DataLoadedRead - ' + data.result);
    } else if (data === ' ') {
      $.ajax('http://fe.it-academy.by/AjaxStringStorage2.php', {
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: {f: 'INSERT', n: 'Islamov_TAJAXStorage', v: JSON.stringify(self.hashStorage)},
        success: DataLoaded,
        error: ErrorHandler
      }
      );
    }
  }

  self.addValue = function(key, value) {
    self.hashStorage[key] = value;
    sendAJAXvalue(self.hashStorage);
  };

  self.getValue = function(key) {
    return self.hashStorage[key];
  };

  self.deleteValue = function(key) {
    delete self.hashStorage[key];
    sendAJAXvalue(self.hashStorage);
    return self.hashStorage[key];
  };

  self.getKeys = function() {
    var keys = [];
    for (var key in self.hashStorage) {
      keys.push(' ' + key);
    }
    return keys;
  };

  // функция которая будет сохранять на сервер изменённый хэш

  function sendAJAXvalue(hash) {
    var password = Math.random();

    $.ajax('http://fe.it-academy.by/AjaxStringStorage2.php', {
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {f: 'LOCKGET', n: 'Islamov_TAJAXStorage', p: password},
      success: LockGetReady,
      error: ErrorHandler
    });

    function LockGetReady(data) {
      console.log('LockGetReady - ' + data.result);

      $.ajax('http://fe.it-academy.by/AjaxStringStorage2.php', {
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: {f: 'UPDATE', n: 'Islamov_TAJAXStorage', p: password, v: JSON.stringify(hash)},
        success: UpdateReady,
        error: ErrorHandler
      });

      function UpdateReady(data) {
        console.log('UpdateReady - ' + data.result);
      }
    }
  }

  function DataLoaded(data) {
    console.log('DataLoaded - ' + data.result);
  }

  function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
    alert(StatusStr + ' ' + ErrorStr);
  }
}
