const prompt = require("prompt-sync")();
let idadeAlist = 18;
let sexo = "M"; // "F" feminino
if (sexo === "M" && idadeAlist >= 18) {
  console.log("Alistamento obrigatório");
} else {
  console.log("Alistamento não obrigatório");
}