// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data){
        this.data= data;
        this.children= [];
    }

    add(data){
        this.children.push(new Node(data));
    }

    remove(data){
        this.children=this.children.filter((node) => { return node.data !=data});
    }
}

class Tree {
    constructor(){
        this.root= null;
    }

    traverseBF(fn){
        let array= [this.root];
        while(array.length){
            let element= array.shift();
            let children = element.children;
            array.push(...children);
            fn.call(this,element);
        }
    }

    traverseDF(fn){
        let array= [this.root];
        while(array.length){
            let element= array.shift();
            let children = element.children;
            array.unshift(...children);
            fn.call(this,element);
        }
    }
}

module.exports = { Tree, Node };
