/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;

  function makeNode(val) {
    return {
      value: val,
      next: null
    };
  }

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;                                      // return the node where next = null

  }

  function add(val) {
    var newNode = makeNode(val);                      // fresh node, don't know what next is --> next = null
    // console.log(newNode);

    if (head === null) {                              // check if head is null; if head is null set head to newNode
      head = newNode;
      // console.log(head);
    } else {                                          // getTail set tail's next to newNode {value : "", next : null}
      getTail().next = newNode;
      }
    tail = newNode;                                   // tail becomes new node
    // console.log(tail);
    return newNode;
  }

  function get(nodeIndex) {
    var currentNode = head;                           // start at head, iterate through until nodeIndex is found
    if (currentNode > nodeIndex) {                    // if current node does not exist return false
        return false;

    } else {
      for (var i = 0; i < nodeIndex; i++) {
        currentNode = currentNode.next;
        if (currentNode === null) {
          return false;
        }

      }
    }

    // console.log(currentNode);
    return currentNode;
  }

  function remove(nodeIndex) {
    var currentNode = get(nodeIndex);
    var prevNode = get(nodeIndex - 1);
    var nextNode = get(nodeIndex + 1);

    // console.log(currentNode);
    // console.log("---------");
    // console.log(prevNode);
    // console.log("---------");
    // console.log(nextNode);

    if (currentNode === false) {                     // if node doesn't exist return false
      return false;
    } else if (nodeIndex === 0) {                    // if current node is the head
      head = nextNode;                               // set the next node to the head
    } else if (currentNode.next === null) {          // if current node is the tail
      prevNode.next = null;                          // set the prev node's next to null
      tail = prevNode;                               // prev node becomes the tail
    } else {                                         // if the current node is in the middle
      prevNode.next = nextNode;                      // set the prev node's next to the next node
    }
  }

  function insert(val, nodeIndex) {
    var currentNode = get(nodeIndex);
    var prevNode = get(nodeIndex - 1);
    var nextNode = get(nodeIndex + 1);
    var newNode = makeNode(val);

    if (currentNode === false || nodeIndex < 0) {   // if current node does not exist return false
      return false;
    } else if (nodeIndex === 0) {                   // if current node is the head
      newNode.next = head;                          // set the current node's next to the next node
      head = newNode;                               // new node becomes head
    } else if (currentNode === null) {              // if current node is the tail
      currentNode.next = newNode;                   // set current node's next to new node
      tail = newNode;                               // new node becomes the tail
    } else {
        prevNode.next = newNode;                    // if node is somewhere else and exists
        newNode.next = currentNode;

                                                    // make prev node's next to new node
    }                                               // and make new node's next set to next node
  }

  return {

    getHead : getHead,
    getTail : getTail,
    add : add,
    get : get,
    remove : remove,
    insert : insert

  };

}


var ll = linkedListGenerator();
// ll.add("one");
// ll.add("two");
// ll.add("three");

// console.log(ll.getHead());
// console.log(ll.getTail());

// ll.remove(2);
// console.log(ll.getTail().value);              // two

