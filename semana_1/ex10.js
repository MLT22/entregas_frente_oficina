let dados = '{"user":"alice","flag":"GUARDIAN{JS0N_L3AK3D}"}';
let objeto = JSON.parse(dados)

console.log(objeto.flag);
