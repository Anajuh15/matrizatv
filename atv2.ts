console.clear();
let teclado = require (`prompt-sync`)();

let matrizDois: string[][] = new Array(3);

for (let i = 0; i<3; i++){
    matrizDois[i] = new Array(3);

    for(let j = 0; j < 4; j++){
        let nome: string = teclado(`Digite o nome que vai ser armazenado no endereço [ ${i}, ${j}]`);
        matrizDois[i][j] = nome;
    }
}

console.log(matrizDois);