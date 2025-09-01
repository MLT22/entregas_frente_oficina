var numeros = [1,5,2,7,9,10,3]
function maior (n){
    var maior = 0
    n.forEach(element => {
       if(element > maior){
        maior = element
       }
    });
    return maior
}

console.log(maior(numeros));
