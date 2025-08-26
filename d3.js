const prompt = require("prompt-sync")();
let pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 18 },
  { nome: "Carlos", idade: 30 }
];

let maisVelho = pessoas[0];
let maisNovo = pessoas[0];

for (let i = 1; i < pessoas.length; i++) {
  if (pessoas[i].idade > maisVelho.idade) maisVelho = pessoas[i];
  if (pessoas[i].idade < maisNovo.idade) maisNovo = pessoas[i];
}

console.log("Pessoa mais velha:", maisVelho.nome, "-", maisVelho.idade, "anos");
console.log("Pessoa mais nova:", maisNovo.nome, "-", maisNovo.idade, "anos");