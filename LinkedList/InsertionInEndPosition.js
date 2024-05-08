class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}

class LinkedList{
    constructor() {
        this.head=null
    }

    insert(val){
        const newNode=new Node(val);
        newNode.next=this.head;
        this.head=newNode;
    }

    insertAtEnd(num){
        const node=new Node(num)

        //Check if the list is empty
        if(!this.head){
            this.head=node
            return
        }
        let now =this.head;
        while(now.next !==null){
            now=now.next
        }
        now.next=node;
    }

    

    print(){
        let now=this.head;
        let result=[]
        while(now !==null){
            result.push(now.data)
            now=now.next
        }
        console.log("heheh",result)
    }
}


const linkedlist=new LinkedList()

linkedlist.insert(50)
linkedlist.insert(60)

linkedlist.insertAtEnd(40)

linkedlist.print()