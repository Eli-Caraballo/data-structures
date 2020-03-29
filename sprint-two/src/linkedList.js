
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var chain = function(obj, value){
      if (obj.head === null){
        obj.head = Node(value);
        obj.tail = obj.head;
      } else if (obj.head.next === null){
        obj.head.next = Node(value);
        obj.tail = obj.head.next;
      } else {
        chain(obj.next, value);
      }
    };
    chain(list, value);
  };

  list.removeHead = function() {
    if(list.head.next === null){
      return list.head.value;
    }
    var removedVal = list.head.value;
    list.head.value = list.head.next.value;
    return removedVal;
  };

  list.contains = function(target) {
    var chain = function(obj, target){
      if(obj.value === target){
        return true;
      }else if(obj.next !== null){
        return chain(obj.next, target);
      }
      return false;
    };
    return chain(list.head, target);
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addToTail() complexity = constant -> O(1);
  removeHead() complexity = constant -> O(1);
  contains() complexity = linear -> O(n)
 */