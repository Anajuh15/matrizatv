/*
5- Crie uma matriz 3x3 com entrada manual de
números. Em seguida, exiba a matriz na tela.
*/

console.clear();
let teclado = require(`prompt-sync`)();
let minhaMatriz: number[][] = [];

let linha = 2;
let coluna =2;

for (let a = 0; a < linha; a++){
     minhaMatriz[a] = [];

     for (let z = 0; z < coluna; z++){
     minhaMatriz[a][z] = parseFloat(teclado(`insira o número que vai estar no endereço [${a}, ${z}]da matriz;`));

     
     }
}

console.log(minhaMatriz);