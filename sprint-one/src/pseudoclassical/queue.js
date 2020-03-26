var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.incrementor = 0;
  this.topQ = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.incrementor] = value;
  this.incrementor++;
};

Queue.prototype.dequeue = function() {
  var cache = this.storage[this.topQ];
  delete this.storage[this.topQ];
  this.topQ++;
  return cache;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};