//creating the Node Class
class Node {
  constructor(data) {
    this.data = data
    this.link = null
  }
}

//Creating the object and passing data to the node

const node1 = new Node(3)
const node2 = new Node(4)
const node3 = new Node(10)
const node4 = new Node(20)

//linking the nodes
node1.link = node2
node2.link = node3
node3.link = node4
node4.link = null

//using traversing priting the data

function traverse(node) {
  let current = node
  let result = []
  while (current !== null) {
    result.push(current.data)
    current = current.link
  }
  console.log('-->', result)
}

traverse(node1)
