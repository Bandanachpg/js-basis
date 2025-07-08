// objects
// non primitive
//? pass by reference 
//? mutable
// const obj = {}

// object literal {}
// const obj = {
// }

// Define a single person object
const person = {
    name: 'Person name',
    age: 10,
    address: {
        city: '',
        street: '',
    },
    // methods
    speak() {
        console.log('hello');
    },
};

// read
//? dot notation
const name = person.name;
console.log(name);
//? bracket notation
console.log(person['age']);

const key = 'name';
console.log(person[key]);
console.log(person['full name']); // undefined, as 'full name' does not exist

// update / modify
person.name = 'Alice';
person['age'] = 30;
person.address.city = 'New City'; // update nested property
person.address.street = 'Main St';

//? freeze
Object.freeze(person);
// Note: person.address is still mutable unless you deep freeze it
// To deep freeze, you would need a helper function

// These changes will not take effect because person is frozen
person.name = 'ram'; // will not change
person.email = 'xyz'; // will not be added
console.log(person);

//? seal (example usage)
// Object.seal(person); // Uncomment to use seal instead of freeze

console.log(Object.keys(person));
 console.log(Object.values(person))


console.log(Object.entries(person));

console.log(person.hasOwnProperty('name')); // true

// destructuring
const { name: personName, age, address } = person;
console.log(personName, age, address);
// destructuring with default values
const { name: personName2 = 'Default Name', age: personAge = 0, address: personAddress = {} } = person;
console.log(personName2, personAge, personAddress);

//spread operator (...)
const newPerson = { ...person, email: 'example@email.com' };
console.log(newPerson);

// destructuring nested objects
const { address: { city, street } } = person;
console.log(city, street);

// Add a new object obj2 with a phone number
const obj2 = {
    name: 'Sample Name',
    phone: '123-456-7890'
};
console.log(obj2);

