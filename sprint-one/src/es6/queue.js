class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.incrementer = 0;
    this.topQ = 0;
  }

  enqueue(value) {
    this.storage[this.incrementer] = value;
    this.incrementer++;
  }

  dequeue() {
    var cache = this.storage[this.topQ];
    delete this.storage[this.topQ];
    this.topQ++;
    return cache;
  }

  size() {
    return _.size(this.storage);
  }
}