import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboorteJaar = parseFloat(await userInput.question('Wat is je geboorteJaar? '));
console.log(geboorteJaar);

let toekomstJaar = 2031 - geboorteJaar;

console.log("In 2031 zult u " + toekomstJaar + "jaar zijn");