const prompt = require("prompt-sync")();
let preco = 120;
let desconto = preco * 0.15;
let precoFinal = preco - desconto;
precoFinal = precoFinal + 10;
console.log("Valor final do pedido:", precoFinal);