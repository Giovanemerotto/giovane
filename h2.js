const prompt = require("prompt-sync")();
let area = 500;
if (area <= 49) {
  console.log("Mercearia");
} else if (area <= 399) {
  console.log("Mercadinho");
} else if (area <= 999) {
  console.log("Mercado");
} else if (area <= 2499) {
  console.log("Supermercado");
} else {
  console.log("Hipermercado");
}