var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style
  this.storage = {};
  this.incrementer = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.incrementer] = value;
  this.incrementer++;
};

Stack.prototype.pop = function() {
  this.incrementer--;
  var cache = this.storage[this.incrementer];
  delete this.storage[this.incrementer];
  return cache;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};