var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.enqueue = 0;
  storage.dequeue = 0;
  storage.size = 0;
  _.extend(storage, Queue.queueMethods);
  return storage;
};

// var queueMethods = {};

Queue.queueMethods = {};

Queue.queueMethods.enqueue = function(value) {
  var incrementer = 1;
  this.incrementer = value;
  incrementer++;
};

Queue.queueMethods.dequeue = function() {
  var topQ = 1;
  var value;
  if(this[topQ]){
    value = this[topQ];
    delete this[topQ];
    topQ++;
  }
  return value;
};

Queue.queueMethods.size = function() {
  return _.size(Queue.queueMethods);
};
