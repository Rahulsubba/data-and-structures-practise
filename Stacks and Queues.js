 //Stacks//
/*  class node{
    constructor(){
        this.array = []; // O(1)
    }
    append(data){
        this.array.push(data); //O(1)
    }
    remove(data){
        this.array.pop(data); //O(1)
    }
    size(){
       console.log(this.array[this.array.length -1]) //O(1)
    }

}


let num = new node()
num.append(1)
num.append(2)
num.append(3)
//num.remove()
num.size()
console.log(num)*/

// Queues// 

/*class Queues{
    constructor(){
        this.item = [];
    }
    enqeues(data){
        this.item.push(data)
    }
    deqeues(data){
        if(this.isEmpty){
            return empty;
        }
        this.item.shift(data)
    } 
}

let list = new Queues;
list.enqeues(1)
list.enqeues(2)
list.enqeues(3)
list.enqeues(4)
//list.deqeues()
console.log(list)*/


/*class Stack{
    constructor(){
        this.item = [];
    }
    push(data){
        this.item.push(data)
    }
    pop(data){
        if(!this.item){
            return undefined;
        }
        this.item.pop(data)
    }
    peek(){
      console.log(this.item[this.item.length -1])
    }
}

let stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
//stack.pop()
stack.peek()
//console.log(stack)

