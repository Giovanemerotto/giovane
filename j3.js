const prompt = require("prompt-sync")();
let pares = 0, impares = 0;

for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0) pares++;
  else impares++;
}

console.log("Quantidade de pares:", pares);
console.log("Quantidade de ímpares:", impares);