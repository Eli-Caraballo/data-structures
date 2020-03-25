var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var incrementor = 1;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[incrementor] = value;
    incrementor++;
  };

  var topQ = 1;
  someInstance.dequeue = function() {
    var value;
    if (storage[topQ]) {
      value = storage[topQ];
      delete storage[topQ];
      topQ++;
    }
    return value;
  };

  someInstance.size = function() {
    var arr = Object.keys(storage);
    return arr.length;
  };

  return someInstance;
};
