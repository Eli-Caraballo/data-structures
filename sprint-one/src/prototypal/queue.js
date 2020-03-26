var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.incrementor = 0;
  someInstance.topQ = 0;
  return someInstance;
};

var queueMethods = {
  enqueue(value) {
    this.storage[this.incrementor] = value;
    this.incrementor++;
  },
  dequeue() {
    var cache;
    if (this.storage[this.topQ]) {
      cache = this.storage[this.topQ];
      delete this.storage[this.topQ];
      this.topQ++;
    }
    return cache;
  },
  size() {
    var length = Object.keys(this.storage);
    return length.length;
  }
};