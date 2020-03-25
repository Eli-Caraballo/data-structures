var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var incrementer = 1;
  var bottomStack = 0
  // Implement the methods below
  someInstance.push = function(value) {
    storage[incrementer] = value;
    incrementer++;
    bottomStack++;
  };
  someInstance.pop = function() {
    var value;
    if (storage[bottomStack]) {
      value = storage[bottomStack];
      delete storage[bottomStack];
      bottomStack--;
      incrementer--;
    }
    return value;
  };

  someInstance.size = function() {
    return _.size(storage);
  };

  return someInstance;
};
