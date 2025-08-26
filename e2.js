const prompt = require("prompt-sync")();
let nums = [10, 25, 3, 99, 45];
let maior = nums[0];
let menor = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (nums[i] > maior) maior = nums[i];
  if (nums[i] < menor) menor = nums[i];
}
console.log("Maior:", maior, "Menor:", menor);
