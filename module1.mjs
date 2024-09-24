// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

let getal1 = 5
let getal2 = 6


let som = getal1 + getal2;
console.log("de som is: "+ som);

let verschil = getal1 - getal2;
console.log("Het verschil is:" + verschil);

let product = getal1 * getal2;
console.log("Het product is:" + verschil);

let deling = getal1 / getal2;
console.log("De deling is:" + verschil);


process.exit();