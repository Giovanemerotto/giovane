const prompt = require("prompt-sync")();
let numeros = [5, 10, 3, 8, 20, 0]; // 0 encerra
let maior = numeros[0];
let menor = numeros[0];
let soma = 0;
let qtd = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 0) break;
  if (numeros[i] > maior) maior = numeros[i];
  if (numeros[i] < menor) menor = numeros[i];
  soma += numeros[i];
  qtd++;
}

console.log("Maior:", maior);
console.log("Menor:", menor);
console.log("Média:", (soma / qtd).toFixed(2));