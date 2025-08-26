const prompt = require("prompt-sync")();
let idadePessoa = 70;
if (idadePessoa <= 12) {
  console.log("Criança");
} else if (idadePessoa <= 17) {
  console.log("Adolescente");
} else if (idadePessoa <= 64) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}