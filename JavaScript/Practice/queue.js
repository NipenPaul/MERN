class Queue{
    constructor(){
        this.items = [];
        this.size = 0;
    }
    enqueue(item){
        this.items.push(item);
        this.size += 1;
    }
    dequeue(){
        if(this.isEmpty()){
            return;
        }
        this.items.shift();
        this.size -= 1;
    }
    isEmpty(){
        if(this.size == 0){
            console.log("Queue is Empty!");
            return true;
        }
        return false;
    }
    front(){
        if(!this.isEmpty()){
            return this.items[0];
        }
    }
    clear(){
        this.items = [];
        this.size = 0;
    }
}

const que = new Queue();
que.enqueue(4);
que.enqueue(5);
que.dequeue();
console.log(que);
