class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.incrementer = 0;
  }

  push(value) {
    this.storage[this.incrementer] = value;
    this.incrementer++;
  }

  pop() {
    this.incrementer--;
    var cache = this.storage[this.incrementer];
    delete this.storage[this.incrementer];
    return cache;
  }

  size() {
    return _.size(this.storage);
  }
}