var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value); // I like this
    if ((list.head === null)) {
      list.head = newNode;
      list.tail = list.head;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    var formerHead = list.head;
    list.head = list.head.next;
    return formerHead.value;
  };

  list.contains = function(target) { //recursively check head, if not head move on to head.next > head.next.next > head.next.next.next
    var start = list.head;
    while (start) {
      if (start.value === target) {
        return true;
      }
      start = start.next;
    }
    return false;
    // if (start.value = target) {
    //   return true;
    // }
    // for (var i = 0; i < list.size; i++) {
    //   start = start.next
    // }
    // start = start.next;
    // return false;
    // return _.contains(list, target); // only works with array
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
 */