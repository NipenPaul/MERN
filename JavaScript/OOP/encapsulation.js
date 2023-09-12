class Encapsulation{
    constructor(){
        var name;
        var id;
    }
    setName(name){
        this.name = name;
    }
    setId(id){
        this.id = id;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
}

var encapObj = new Encapsulation();
encapObj.setName("Nipen Paul");
encapObj.setId(174038);
console.log(encapObj.getName());
console.log(encapObj.getId());