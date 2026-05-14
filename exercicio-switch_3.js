let valor1 = ""
let valor2 = ""
valor1 = String(prompt("Insira jogada: "));
valor2 = String(prompt("Insira jogada: "));
//pratoNome = ""
//pratoPreco = 0
switch (valor1) {
    case 'pedra':
        switch (valor2) {
            case 'papel': 
                console.log("O jogador 2 ganhou!")
                break;
            case 'tesoura':
                console.log("O jogador 1 venceu!")
                break;
            case 'pedra':
            default: 
                console.log("Jogada inválida/Empate")
        }
    break;
    case 'papel':
        switch (valor2) {
            case 'pedra': 
                console.log("O jogador 2 ganhou!")
                break;
            case 'tesoura':
                console.log("O jogador 1 venceu!")
                break;
            case 'papel':
            default: 
                console.log("Jogada inválida/Empate")
        }
    break;
    case 'tesoura':
        switch (valor2) {
            case 'papel': 
                console.log("O jogador 2 ganhou!")
                break;
            case 'pedra':
                console.log("O jogador 1 venceu!")
                break;
            case 'tesoura':
            default: 
                console.log("Jogada inválida/Empate")
        }
    break;
    default:
        console.log("Jogada invalida");
}