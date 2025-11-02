// Higher order functions
function sayHello() {
    return function () {
        return "Hello World";
    }
}

let hello = sayHello();
console.log(hello());

// Non functional style
let input = "  Javascript  ";
let output = `<div>${input.trim()}</div>`;

// Functional Style
// Step 1: Trim String
// Step 2: Wrap in Div

const trim = (str) => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

console.log(wrapInDiv(toLowerCase(trim(input))));

