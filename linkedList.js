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

  // var linkedListEx = {
  //   nodeVal: " ",
  //   nodeNext: {
  //     nodeVal: " "
  //     nodeNext {
  //      nodeVal: " "
  //      nodeNext: null
  //     }
  // }

  // var linkedListEx = [{node1}, {node2}, {node3}]

  // var node = {
  //   nodeVal: " ",
  //   nodeNext: {
  //      nodeVal: " ",
  //      nodeNext:
  //   }
  //}

  function getHead() {
    return head;
  }

  function getTail() {
    //return the node where next = null
    return tail;
  }

  function add(val) {
    // fresh node, don't know what next is --> next = null
    var newNode = makeNode(val);
    // console.log(newNode);

    // check if head is null; if head is null set head to newNode
    if (head === null) {
      head = newNode;
      // console.log(head);

    // getTail set tail's next to newNode {value : "", next : null}
    } else {
      getTail().next = newNode;
      }

    // tail becomes newNode
    tail = newNode;
    // console.log(tail);
    return newNode;
  }

  function get(nodeIndex) {
    //start from the head, then follow (iterate?) through next node until nodeIndex is found
    var currentNode = head;

    if (currentNode > nodeIndex) {
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
    //call get() & delete that node, check next of new tail and make null, if nodeIndex > linkedListEx.length return false


  }

  function insert() {
    //@param
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