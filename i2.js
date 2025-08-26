 const prompt = require("prompt-sync")();
 let anos = 5;
let cigarrosPorDia = 10;
let precoCarteira = 12;
let cigarrosPorCarteira = 20;
let totalCigarros = anos * 365 * cigarrosPorDia;
let totalCarteiras = totalCigarros / cigarrosPorCarteira;
let gasto = totalCarteiras * precoCarteira;

console.log("Total gasto:", gasto);
if (gasto > 10000) {
  console.log("Você já gastou muito");
}