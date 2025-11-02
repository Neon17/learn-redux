const { compose, pipe } = require('lodash/fp.js');

// Lodash library is used to manage long function chaining

let input = "  Javascript  ";

const trim = (str) => str.trim();
const wrap = str1 => str => `<${str1}>${str}</${str1}>`;
const toLowerCase = str => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("span"));
console.log(transform(input));

// or we can use compose

const transform2 = compose(wrap("p"), toLowerCase, trim);
console.log(transform2(input));


// currying means return a function from a function

function add (a){
    return function (b){
        return a + b;
    }
}
// or
const add2 = (a) => (b) => a + b;
add(1)(2);

