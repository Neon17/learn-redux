// Pure functions are those functions which
// 1. Do not modify the state
// 2. Do not have any side effects
// 3. Are Immutable and use immutable data structures


// Immutability means the state cannot be modified
// To change the state, we need to return a new state or make a new copy
// Like State Management in React

// spread operator does the shallow copy

const person = {
    name: "John",
    address: {
        country: "USA",
        city: "San Franciso"
    }
}

const updated = {...person, name: "Jane"};
updated.address.city = "New York";
console.log(updated); 
console.log(person); // outputs address country New York (because spread does shallow copy)

// deep copy (follows immutability rules)

const updated2 = {...person, address: {...person.address, city: "New Kathmandu"}};
console.log(updated2);
console.log(person);

// Immutability in Array

const numbers = [1, 2, 3];
const index = numbers.indexOf(2);
const added = [
    ...numbers.slice(0, index),
    4,
    ...numbers.slice(index)
]

console.log(added); // 1 4 2 3

// Removing
const removed = numbers.filter(num => num !== 2);
console.log(removed);



