

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);
  var bucket = [];
  if((arr) && arr[0] !== k){
    bucket.push(arr);
    bucket.push([k, v]);
    this._storage.set(index, bucket);
  }else{
    this._storage.set(index, [k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);
  if(Array.isArray(arr[0])){
    for(var i = 0; i < arr.length; i++){
      if(arr[i][0] === k){
        return arr[i][1];
      }
    }
  }else{
    return arr[1];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);
  delete arr[1];
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert() complexity = linear O(n)
 retrieve() complexity = linear O(n)
 remove() complexity = linear O()
 */