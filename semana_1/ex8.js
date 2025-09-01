const read = require("readline")
const terminal = read.createInterface({
    input: process.stdin,
    output: process.stdout
})
var n;
terminal.question("Digite um número para fazer a contagem regressiva: ", (entrada) => {
    n = parseInt(entrada)
    for (let index = n; index >= 0 ; index--) {
        console.log(index);
    }
    
    terminal.close()
})