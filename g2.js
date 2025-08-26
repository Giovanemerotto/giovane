const prompt = require("prompt-sync")();
let nomeCad = "Maria";
let idadeCad = 19;
let email = "maria@gmail.com";

if (nomeCad !== "" && idadeCad >= 18 && email.includes("@")) {
  console.log("Cadastro realizado com sucesso!");
} else {
  console.log("Preencha os dados corretamente.");
}