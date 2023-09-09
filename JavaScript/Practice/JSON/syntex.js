// This is the Object
const person = {
    name: "Nipen",
    age: 27,
    skills: ["Programming", "Education"],
    book: {
        name: "Bela Ses",
    },
    alive: true,
    disease: null,
};
// convert a object to JSON Data
console.log(JSON.stringify(person));
// same as JSON data
const personJSON = '{"name": "Nipen","birth": "1996-11-29","age": 27,"skills": ["Programming", "Education"],"book":{"name": "Bela Ses"},"alive": true,"disease": null}';

// convert JSON data to object
const jsonString = JSON.parse(personJSON);
console.log(jsonString);

// now we can use json object property
console.log(jsonString.name);

// Convert to valid JS Array
const myObj = JSON.parse(personJSON, function(key, value){
    if(key == 'birth'){
        return new Date(value);
    }
    return value;
});
console.log(myObj);

