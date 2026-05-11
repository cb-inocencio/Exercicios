let valor1 = ""
let valor2 = ""
valor1 = String(prompt("Insira jogada: "));
valor2 = String(prompt("Insira jogada: "));
//pratoNome = ""
//pratoPreco = 0
switch (prato) {
    case 1:
        console.log("O prato escolido foi BROWNIE R$10");
        //pratoNome = "Brownie";
        //pratoPreco = 10;
        break;
    case 2:
        console.log("O prato escolido foi SORVETE R$5");
        //pratoNome = "Sorvete";
        //pratoPreco = 5;
        break;
    case 3:
        console.log("O prato escolido foi BOLO R$12");
        //pratoNome = "Bolo";
        //pratoPreco = 12;
        break;
    case 4:
        console.log("O prato escolido foi MILKSHAKE R$15");
        //pratoNome = "Milkshake";
        //pratoPreco = 15;
        break;
    case 5:
        console.log("O prato escolido foi PETIT GATEAU R$13");
        //pratoNome = "Petit Gateau";
        //pratoPreco = 13;
        break;
    default:
        console.log("Esse prato não existe");
        //pratoNome = "Esse prato não existe";
        //pratoPreco = null
}

//console.log("O prato escolido foi " + pratoNome + " $" + pratoPreco);