const prompt = require("prompt-sync")();
let pessoas = [
  { nome: "Ana", idade: 20, sexo: "F" },
  { nome: "João", idade: 25, sexo: "M" },
  { nome: "Maria", idade: 19, sexo: "F" },
  { nome: "Carlos", idade: 22, sexo: "M" }
];

let mulheres21 = 0, homensMaiorIdade = 0, totalHomens = 0, totalMulheres = 0;

for (let i = 0; i < pessoas.length; i++) {
  if (pessoas[i].sexo === "F") {
    totalMulheres++;
    if (pessoas[i].idade <= 21) mulheres21++;
  } else {
    totalHomens++;
    if (pessoas[i].idade >= 21) homensMaiorIdade++;
  }
}

console.log("Quantidade de pessoas do sexo feminino com idade <= 21:", mulheres21);
console.log("Quantidade de pessoas do sexo masculino com idade >= 21:", homensMaiorIdade);
console.log("Quantidade total de homens:", totalHomens);
console.log("Quantidade total de mulheres:", totalMulheres);