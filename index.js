//To use an installed package, you must import it in a script.
//When you are using Node, you can import an installed package with the built-in 'require' function.

// import to-title-case 
const toTitleCase = require('to-title-case');
//console.log(toTitleCase); // [Function: toTitleCase]

const lower = 'the lord of the rings: the return of the king.'

const title = toTitleCase(lower);

console.log(title);

// NPM scripts let you define your own shortcuts. Use NPM scripts with the 'npm run command'.