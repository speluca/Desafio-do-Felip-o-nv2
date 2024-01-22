winrate= qtdWins(108,4)

function qtdWins(vitorias, derrotas){
    porcentagem= vitorias - derrotas
    return porcentagem
}

if (winrate < 10) {
    console.log("O Herói tem de saldo de " + winrate + " está no nível de Ferro");
} else if (winrate >= 10 && winrate <= 20) {
    console.log("O Herói tem de saldo de " + winrate + " está no nível de Bronze");
} else if (winrate >= 21 && winrate <= 50) {
    console.log("O Herói tem de saldo de " + winrate + " está no nível de Prata");
} else if (winrate >= 51 && winrate <= 80) {
    console.log("O Herói tem de saldo de " + winrate + " está no nível de Ouro");
} else if (winrate >= 81 && winrate <= 90) {
    console.log("O Herói tem de saldo de " + winrate + " está no nível de Diamante");
} else if (winrate >= 91 && winrate <= 100) {
    console.log("O Herói tem de saldo de " + winrate + " está no nível de Lendário");
} else if (winrate >= 101) {
    console.log("O Herói tem de saldo de " + winrate + " está no nível de Imortal");
} else {
    console.log("O herói não possui saldo válido");
}