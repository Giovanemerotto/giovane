const prompt = require("prompt-sync")();
let salarios = [1200, 1500, 2000, 1800, 2500, 1600, 2200, 1400, 1700, 2100,
                3000, 2800, 1900, 2300, 2600, 2000, 2400, 2700, 3100, 3300];

let total = 0;

for (let i = 0; i < salarios.length; i++) {
  console.log("Funcionário " + (i+1) + " → salário: R$" + salarios[i]);
  total += salarios[i];
}

let media = total / salarios.length;
console.log("Total da folha: R$" + total);
console.log("Média salarial: R$" + media.toFixed(2));