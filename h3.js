const prompt = require("prompt-sync")();
let contas = [
  { nome: "Ana", saldo: 500 },
  { nome: "João", saldo: -200 },
  { nome: "Maria", saldo: 800 },
  { nome: "Carlos", saldo: -100 }
];

let positivos = 0;
let negativos = 0;

for (let i = 0; i < contas.length; i++) {
  if (contas[i].saldo >= 0) positivos++;
  else negativos++;
}

let total = contas.length;
console.log("Percentual de saldos positivos:", (positivos/total*100).toFixed(2)+"%");
console.log("Percentual de saldos negativos:", (negativos/total*100).toFixed(2)+"%");