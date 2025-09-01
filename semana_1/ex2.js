const read = require("readline")
const terminal = read.createInterface({
    input: process.stdin,
    output: process.stdout
})
var idade;
terminal.question("Qual é a sua idade: ", (entrada) => {
    idade = parseInt(entrada)
    idade >= 18 ? console.log("Pode jogar o CTF!") : console.log("Espere mais um pouco...");
    
    terminal.close()
})
