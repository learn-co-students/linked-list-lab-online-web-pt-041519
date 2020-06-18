
// Test data
let firstNode = {name: 'susie', next: 'rkjasj'}
let secondNode = {name: 'sam', next: 'asnan'}
let lastNode = {name: 'charlie', next: null}
let collection = {rkjasj: secondNode, asnan: lastNode, whana: firstNode}
let linkedList = 'whana'

// Return name of input node
const getName = (node) => node.name
// Test
// let node = {name: 'Susie'}
// console.log(getName(node)) // Susie


// Return head node of linked list
const headNode = (linkedList, collection) => collection[linkedList]
// Test
// console.log(headNode(linkedList, collection)) // susie


// Return input's next node
const next = (node, collection) => {
  // console.log("Next is ", collection[node.next])
  return collection[node.next]
}
// Test
// let head = collection[linkedList]
// console.log(next(head, collection))

// Return node from provided index
const nodeAt = (index, linkedList, collection) => {
  let node = headNode(linkedList, collection)
  for (let i=0; i < index; i++) {
    // console.log("Current node ", node)
    node = next(node, collection)
    // console.log("New node is ", node)
  }
  return node
}
// Test
// console.log(nodeAt(0, linkedList, collection)) // firstNode
// console.log(nodeAt(2, linkedList, collection)) // lastNode


// Return address of node at address
const addressAt = (index, linkedList, collection) => {
  if (index === 0) {
    return linkedList
  } else {
    return nodeAt(index-1, linkedList, collection).next
  } 
}
// Test
// console.log(addressAt(1, linkedList, collection)) // rkjasj
// console.log(addressAt(0, linkedList, collection)) // whana


// Return index of provided node
const indexAt = (matchNode, collection, linkedList) => {
  let node = headNode(linkedList, collection)
  let index = 0
  while (node != matchNode) {
    index++
    node = next(node, collection)
  }
  return index
}
// Test
// console.log(indexAt(firstNode, collection, linkedList)) // 0
// console.log(indexAt(secondNode, collection, linkedList)) // 1


// Add node at input index 
const insertNodeAt = (index, newAddress, linkedList, collection) => {
  // Bind previous and current nodes
  let beforeNode = nodeAt(index-1, linkedList, collection)
  let afterNode = nodeAt(index, linkedList, collection)

  // Store after address
  let afterNodeAddress = addressAt(afterNode, linkedList, collection)

  // Set previousNode.next to new address
  beforeNode.next = newAddress

  // Create new node
  let newNode = collection[newAddress]
  newNode.next = afterNodeAddress

  return collection
}
// Test
// let newNode = {name: 'jill', next: ''}
// collection = {
//   rkjasj: secondNode,
//   asnan: lastNode,
//   whana: firstNode,
//   ajhsak: newNode
// }
// console.log(insertNodeAt(1, 'ajhsak', linkedList, collection)) // rkjasj


// Remove node from collection and maintain node order 
const deleteNodeAt = (index, linkedList, collection) => {
  // console.log("Starting collection is ", collection)
  
  // Store node.next address
  let afterNode = nodeAt(index, linkedList, collection).next

  // Find node to delete
  let thisNode = addressAt(index, linkedList, collection)

  // If node before this one, replace beforeNode.next with afterNode
  if (index > 0) { 
    let beforeNode = nodeAt(index-1, linkedList, collection)
    beforeNode.next = afterNode 
  }

  // Delete node
  delete collection[thisNode]

  return collection
}

// Test
// firstNode = {name: 'susie', next: 'rkjasj'}
// secondNode = {name: 'sam', next: 'asnan'}
// let newNode = {name: 'jill', next: ''}
// lastNode = {name: 'charlie', next: null}
// collection = {
//   rkjasj: secondNode,
//   asnan: lastNode,
//   whana: firstNode,
//   ajhsak: newNode
// }
// console.log(deleteNodeAt(1, linkedList, collection)) // firstNode.next = 'asnan'

// firstNode = {name: 'susie', next: 'rkjasj'}
// secondNode = {name: 'sam', next: 'asnan'}
// lastNode = {name: 'charlie', next: null}
// collection = {
//   rkjasj: secondNode,
//   asnan: lastNode,
//   whana: firstNode
// }
// deleteNodeAt(1, linkedList, collection)
// console.log(nodeAt(1, linkedList, collection))