let vetor1 = [];
let vetor2 = [];
let vetorSoma = [];

for (let i = 0; i < 15; i++) {
    vetor1.push(Math.floor(Math.random() * 10));
    vetor2.push(Math.floor(Math.random() * 10));
    vetorSoma.push(vetor1[i] + vetor2[i]);
}

console.log("Vetor 1:", vetor1);
console.log("Vetor 2:", vetor2);
console.log("Soma:", vetorSoma);