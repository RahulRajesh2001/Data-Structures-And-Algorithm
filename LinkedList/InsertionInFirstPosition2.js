//Creating a node using class
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

//For representing the linked list
class LinkedList {
  constructor() {
    this.head = null
  }
  //this is for creating a node
  insert(val) {
    const newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
  }
  //For printing a node
  print() {
    let result = []
    let current = this.head
    while (current !== null) {
      result.push(current.data)
      current = current.next
    }
    console.log('This is elements', result)
  }
}

//Creation of object to the linkedlist
const linkedlist = new LinkedList()

linkedlist.insert(50)
linkedlist.insert(30)
linkedlist.insert(100)

linkedlist.print()
