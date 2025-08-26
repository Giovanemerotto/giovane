let nomes = [];
let notasAlunos = [];

for (let i = 0; i < 5; i++) { // testando com 5 alunos
    nomes.push("Aluno" + (i+1));
    notasAlunos.push(Math.random() * 10);
}

console.log("Relatório de notas >= 7.0:");
for (let i = 0; i < notasAlunos.length; i++) {
    if (notasAlunos[i] >= 7) {
        console.log(`${nomes[i]} - Nota: ${notasAlunos[i].toFixed(2)}`);
    }
}