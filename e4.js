let valores = [];

// cria vetor com 30 valores
for (let i = 0; i < 30; i++) {
    valores.push(Math.floor(Math.random() * 100));
}

// aplica aumento
for (let i = 0; i < valores.length; i++) {
    if (i % 2 === 0) { // posição par
        valores[i] *= 1.02;
    } else { // posição ímpar
        valores[i] *= 1.05;
    }
}

console.log("Valores modificados:", valores);