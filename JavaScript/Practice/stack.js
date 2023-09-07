class Stack{
    constructor(){
        this.items = [];
        this.size = 0;
    }
    push(item){
        this.items.push(item);
        this.size += 1;
    }
    pop(){
        if(this.isEmpty()){
            return;
        }
        this.items.pop();
        this.size -= 1;
    }
    isEmpty(){
        if(this.size == 0){
            console.log("Stack is Empty!");
            return true;
        }
        return false;
    }
    top(){
        if(!this.isEmpty()){
            return this.items[this.size-1];
        }
    }
    clear(){
        this.items = [];
        this.size = 0;
    }
}

const st = new Stack();
st.pop();
st.push(1);
st.push(5);
st.push("Hello");
console.log(st);
console.log(st.size);
console.log(st.top());
st.clear();
console.log(st);
