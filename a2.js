const prompt = require("prompt-sync")();
let nota1 = 7, nota2 = 6, nota3 = 8;
let media = (nota1 + nota2 + nota3) / 3;
if (media >= 7) {
  console.log("Aprovado com média:", media);
} else {
  console.log("Reprovado com média:", media);
}