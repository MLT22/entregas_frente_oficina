let numeros = []
for (let index = 1; index <= 20; index++) {
    numeros.push(index)
    
}
let pares = numeros.filter(n => n%2 === 0)
console.log(pares);
