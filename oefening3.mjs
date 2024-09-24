// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

let getal1 = parseFloat(await userInput.question("Geef getal 1 "));
console.log(getal1)

let getal2 = parseFloat(await userInput.question("Geef getal 2 "));
console.log(getal2)

let som = getal1 + getal2;

console.log("Uw getal was " + getal1 + " en " + getal2 + " de som is "+ som );

process.exit();