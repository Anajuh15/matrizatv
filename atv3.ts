console.clear();
let teclado = require (`prompt-sync`)();

let minhaMatriz: number[][] = []

let linha = 4;
let coluna = 2;

for (let z = 0; z < linha; z++) {
    minhaMatriz[z] = [];

    for (let x = 0; x < coluna; x++) {
        let numero: number = parseFloat(teclado(`Digite o nome que vai estar no endereço [${z}, ${x}] da matriz: `));
        
        minhaMatriz[z][x] = numero;
    }
}
console.log(minhaMatriz);