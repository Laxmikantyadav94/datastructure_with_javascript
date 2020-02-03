// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next=null){
        this.data= data;
        this.next= next;
    }
}

class LinkedList {
    constructor(){
        this.head= null;
    }

    insertFirst(data){
        this.head = new Node(data,this.head);
    }

    size(){
        let counter =0;
        let node= this.head;
        while(node){
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head){
            return null;
        }

        let node= this.head;
        while(node.next){
            node = node.next;
        }
        return node;
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if(this.head){
            this.head= this.head.next;
        }
    }

    removeLast(){
        if(this.head){
            if(this.head.next==null){
                this.head = null;
                return;
            }
            let node = this.head;

            while(node.next.next){
                node = node.next;
            }
            node.next = null;
        }
    }

    insertLast(data){
        let node = new Node(data);
        if(!this.head){
            this.head = node;
            return;
        }

        let curNode = this.head;
        while(curNode.next){
            curNode = curNode.next;
        }

        curNode.next = node;
    }

    // getAt(num){
    //     if(!this.head){
    //         return null;
    //     }

    //     let node = this.head;
    //     for(let i=1; i<=num; i++){
    //         if(!node.next){
    //             return null;
    //         }
    //         node= node.next;
    //     }
    //     return node;
    // }
    getAt(num){
        let node = this.head;
        let counter=0;
        while(node){
            if(counter==num){
                return node;
            }
            counter++;
            node= node.next;
        }
        return null;
    }

    removeAt(index){
        if(!this.head){
            return;
        }
        if(index==0){
            this.head= this.head.next;
            return;
        }
        let prevNode = this.getAt(index-1);
        if(!prevNode || !prevNode.next){
            return;
        }
        prevNode.next= prevNode.next.next;

    }

    insertAt(data,index){
        let node= new Node(data);
        if(!this.head){
            this.head=node;
            return;
        }
        if(index ==0){
            node.next= this.head;
            this.head=node;
            return;
        }

        let prevNode = this.getAt(index-1) || this.getAt(this.size()-1);

        node.next=prevNode.next;
        prevNode.next=node;
    }

    forEach(fn){
        let node = this.head;

        while(node){
            fn.call(this,node);
            node = node.next;
        }
    }

    *[Symbol.iterator](){
        let node = this.head;
        while(node){
            yield node;
            node = node.next
        }
    }


}

module.exports = { Node, LinkedList };
