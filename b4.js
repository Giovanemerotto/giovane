let notas = [];
for (let i = 0; i < 35; i++) {
    let nota = Math.random() * 10; // simulação de notas de 0 a 10
    notas.push(nota);
}

console.log("Notas maiores ou iguais a 7.0:");
for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 7) {
        console.log(`Aluno ${i+1}: Nota = ${notas[i].toFixed(2)}`);
    }
}