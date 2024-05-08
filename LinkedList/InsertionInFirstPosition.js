class Node{
    constructor(data){
        this.data=data;
        this.link=null
    }
}

const node1=new Node(1)
const node2=new Node(2)
const node3=new Node(3)

node1.link=node2;
node2.link=node3

function print(head){
    let current=head;
    while(current !==null){
        console.log(current.data)
        current=current.link
    }

}

const node0=new Node(10)
node3.link=node0


print(node1)