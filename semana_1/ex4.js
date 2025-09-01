const read = require("readline")
const terminal = read.createInterface({
    input: process.stdin,
    output: process.stdout
})
var n;
terminal.question("Digite um número para fazer a tabuada: ", (entrada) => {
    n = parseInt(entrada)
    for (let index = 1; index <= 10; index++) {
        console.log(n * index);
    }
    
    terminal.close()
})