const prompt = require("prompt-sync")();
let somaImpares = 0;
for (let i = 11; i < 30; i += 2) {
  somaImpares += i;
}
console.log("Soma dos ímpares:", somaImpares);
