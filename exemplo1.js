function verificarMedalha() {
    let posicao = Number(document.getElementById("posicao").value)

    // Checar conteudo da variavel posição
    let mensagem = document.getElementById("resultadoMedalha")
    // funciona apenas para comparar igualdades
    // sem maior e menor
    switch(posicao){
        case 1: mensagem.innerText = "Medalha de Ouro"
                mensagem.style.color = "gold"
                break //não entra nos case abaixo
        case 2: mensagem.innerText = "Medalha de Prata"
                mensagem.style.color = "silver"
                break
        case 3: mensagem.innerText = "Medalha de Bronze"
                mensagem.style.color = "brown"
                break
        default: mensagem = "Posição sem medalha definida"
    }
    // document.getElementById("resultadoMedalha").innerText = mensagem
}