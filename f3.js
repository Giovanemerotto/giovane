const prompt = require("prompt-sync")();
let romario = 1.50;
let bebetto = 1.10;
let anos = 0;

while (bebetto <= romario) {
  romario += 0.02;
  bebetto += 0.03;
  anos++;
}

console.log("Bebeto será maior que Romário em", anos, "anos.");