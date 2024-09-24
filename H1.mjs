import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let dagen = parseFloat(await userInput.question("Geef aantal dagen "));
let dagenInSec = dagen * 86400; 
console.log(dagenInSec);   

let uren = parseFloat(await userInput.question("Geef aantal uren "));
let urenInSec = uren * 3600;
console.log(urenInSec);

let minuten = parseFloat(await userInput.question("Geef aantal minuten "));
let minutenInSec = minuten * 60;
console.log(minutenInSec);

let seconden = parseFloat(await userInput.question("Geef aantal seconden "));

let som = dagenInSec + urenInSec + minutenInSec + seconden;


console.log("De aantal seconden zijn:" + som);

