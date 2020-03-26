var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    incrementer: 1,
    botStack: 0,
  };
  _.extend(someInstance, stackMethods);
  return someInstance;
};


var stackMethods = {
  push: function(value) {
    this.storage[this.incrementer] = value;
    this.incrementer++;
    this.botStack++;
  },

  pop: function() {
    var value = this.storage[this.botStack];
    delete this.storage[this.botStack];
    this.botStack--;
    this.incrementer--;
    return value;
  },

  size: function() {
    var length = Object.keys(this.storage);
    return length.length;
  },
};