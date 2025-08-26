const prompt = require("prompt-sync")();
let a1 = 1, a2 = 1;
console.log(a1);
console.log(a2);

for (let i = 3; i <= 15; i++) {
  let prox = a1 + a2;
  console.log(prox);
  a1 = a2;
  a2 = prox;
}