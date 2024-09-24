import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboorteJaar = parseFloat(await userInput.question('Wat is je geboorteJaar? '));
console.log(geboorteJaar);

let toekomstJaar = parseFloat(await userInput.question('Wat is je toekomstJaar? '));
console.log(toekomstJaar);

console.log("In de toekomst bent u " + (toekomstJaar - geboorteJaar) + " of " + (toekomstJaar - geboorteJaar + 1) + " jaar zijn");