// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
       this.stackOne= new Stack();
       this.stacktwo = new Stack();
    }
    add(num){
        this.stackOne.push(num);
    }

    remove(){
        while(this.stackOne.peek()){
            this.stacktwo.push(this.stackOne.pop());
        }
        let result= this.stacktwo.pop();
        while(this.stacktwo.peek()){
            this.stackOne.push(this.stacktwo.pop());
        }
        return result;
    } 
    
    peek(){
        while(this.stackOne.peek()){
            this.stacktwo.push(this.stackOne.pop());
        }
        let result= this.stacktwo.peek();
        while(this.stacktwo.peek()){
            this.stackOne.push(this.stacktwo.pop());
        }
        return result;
    }
    
}

module.exports = Queue;
