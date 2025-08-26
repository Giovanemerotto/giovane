const prompt = require("prompt-sync")();
let distancia = 300; // km
let consumo = 10; // km por litro
let precoGasolina = 5; // R$
let litros = distancia / consumo;
let custo = litros * precoGasolina;
console.log("Litros necessários:", litros);
console.log("Custo da viagem:", custo);
