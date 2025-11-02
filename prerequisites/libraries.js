// We have to do Functional Programming for Redux
// Using JS Libraries for Functional Programming
// Immutable JS
// Immer
// Mori

// Implementing immutable JS

const { Map } = require("immutable");

const map = Map({ a: 1, b: 2 });
map.set("a", 3);
console.log(map.toJS());

// Implementing Immer

const { produce } = require("immer");
let book = { title: "The Great Gatsby", author: "F. Scott Fitzgerald" };

function publish(book) {
    return produce(book, draft => {
        draft.isPublished = true;
    });
}

let updated = publish(book);
console.log(updated); // updated book
console.log(book); // original book

