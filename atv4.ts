
/* 
4- Altere o código dois(2) desse conteúdo para funcionar
com números, faça o teste se o laço de repetição
referente a linha da matriz chega criar a quarta linha, salve
dessa forma e anexe a atividade o arquivo .ts e um print
da tela do cmd(prompt command) com o resultado do
teste.

O código 1 e 2 desse slide deve ser salva e enviado juntos com
as atividades abaixo. Todo o conteúdo deve ser
compartilhado no github

Atividades
*/

console.clear();
let teclado = require (`prompt-sync`)();

let matrizDois: number[][] = new Array(3);

for (let i = 0; i<3; i++){
    matrizDois[i] = new Array(3);

    for(let j = 0; j < 4; j++){
        let numero: number = parseFloat(teclado(`Digite o nome que vai ser armazenado no endereço [ ${i}, ${j}]`));
        matrizDois[i][j] = numero;
    }
}

console.log(matrizDois);