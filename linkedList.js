/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;

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

  function add() {
    //if head is null, head becomes new node ELSE getTail set tail's next to newNode {value : "", next : null}
    }

  function get() {
    //@param nodeNum, return node[nodeNum]

  }

  function remove() {
    //@param nodeNum, return node[nodeNum] & delete it, check next of new tail and make null, if nodeNum > linkedListEx.length return false
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

var myLL = linkedListGenerator();
