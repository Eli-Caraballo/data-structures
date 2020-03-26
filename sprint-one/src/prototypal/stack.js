var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.incremetor = 1;
  return someInstance;
};

var stackMethods = {
  push(value) {
    this.storage[this.incremetor] = value;
    this.incremetor++;
  },
  pop() {
    this.incremetor--;
    var cache = this.storage[this.incremetor];
    delete this.storage[this.incremetor];
    return cache;
  },
  size() {
    return Object.keys(this.storage).length;
  }
};


