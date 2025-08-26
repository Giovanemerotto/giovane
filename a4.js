let jogos = ["FIFA", "CS:GO", "Valorant", "LoL", "Fortnite"];

// adiciona mais um jogo no final
jogos.push("GTA V");

// substitui a segunda posição por "Minecraft"
jogos[1] = "Minecraft";

// remove o último jogo
jogos.pop();

console.log("Array final:", jogos);
console.log("Tamanho do array:", jogos.length);