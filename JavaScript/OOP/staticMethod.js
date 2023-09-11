class StaticMethod{
    static display(){
        return "First display method";
    }
    static display(){
        return "second display method";
    }
}
// We can't create a StaticMethod objeect, because static method not as a normal function
console.log(StaticMethod.display());

class Test{
    constructor(){
        console.log(Test.display());
        // same as
        console.log(this.constructor.display());
    }
    static display(){
        return "Static method invoked.."
    }
}

const test = new Test();
