//EXERCÍCIO 1
    // O código do exercício pega um número que o usuário inserir e faz uma verificação que pretende saber se o número é de modulo 0. Poderiamos interpretar que se o número for par logo ele é de modulo 0 e logo o usuário terá impresso "Passou no teste". Caso contrario haverá um resto, então o número não é de modulo 0 e o usuário recebera a mensagem "Não passou no teste."

//EXERCÍCIO 2
    // A. O código serve para passar o valor da fruta para o usuário.
    // B. Se o valor de fruta for "Maçã" será impresso: "O preço da fruta maçã é R$ 2.25"
    // C. Acredito que ele passaria o case "Pêra" e iria para o default. A mensagem impressa seria: O preço da fruta pêra é R$ 5

//EXERCÍCIO 3
    // A. A primeira linha está declarando uma const de nome numero com atribuição a um prompt que irá coletar o valor do usuário. Esse valor será convertido em tipo number.
    // B. No caso do usuário digitar 10 a mensagem seria: Esse número passou no teste". Se -10 seria acredito que daria algum erro ou nao printaria nada. Não sei ao certo. *REVISAR ESSA RESPOSTA DEPOIS DE ESTUDO*
    // C. *VER AULA NO VIMEO E DEPOIS RESMPONDER*

    
    // ############ EXERCÍCIOS DE ESCRITA DE CÓDIGO ############

    // EXERCÍCIO 4

// let idadeUsuario = Number(prompt("Qual a sua idade?"))

// if (idadeUsuario >= 18){
//     console.log("Você pode dirigir!")
// } else {
//     console.log("Você não pode dirigir!")
// }

//     // EXERCÍCIO 5

// let turnoAluno = prompt("Digite qual turno do dia você estuda. Digite: M (matutino) ou V (Vespertino) ou N (Noturno)")

// if (turnoAluno === "M"){
//     console.log("Bom dia!")
// } else if (turnoAluno === "V") {
//     console.log("Boa tarde!")
// } else if (turnoAluno === "N"){
//     console.log("Boa noite!")
// } else {
//     console.log("Porfavor, verifique se o valor digitado está correto!")
// }

// EXERCÍCIO 6

// let turnoAluno = prompt("Digite qual turno do dia você estuda. Digite: M (matutino) ou V (Vespertino) ou N (Noturno)")

// switch (turnoAluno) {
//     case "M":
//         console.log("Bom dia!")
//         break;
//     case "V":
//         console.log("Boa tarde!")
//         break;
//     case "N":
//         console.log("Boa noite!")
//         break;
//     default:
//         console.log("Porfavor, verifique se o valor digitado está correto!")
//         break;
// }



// EXERCÍCIO 7

// let generoFilme = prompt("Qual o gênero do filme que irão assistir?")
// let precoIngresso = Number(prompt("Qual o valor do ingresso?"))

// if (generoFilme === "fantasia" && precoIngresso < 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }


// ###### DESAFIOS ######

    // DESAFIO 1

// let generoFilme = prompt("Qual o gênero do filme que irão assistir?")
// let precoIngresso = Number(prompt("Qual o valor do ingresso?"))
// let snack = prompt("Qual snack você irá comprar?")


// if (generoFilme === "fantasia" && precoIngresso < 15) {
//     console.log("Bom filme!")
//     console.log(`... com ${snack}!`)
// } else {
//     console.log("Escolha outro filme :(")
// }


    //DESAFIO 2

/*     
let nomeDoUsuario = prompt("Digite seu nome completo:")
let tipoDeJogo = prompt("Qual o tipo de jogo? digite IN para internacional; DO para doméstico")
let etapaDoJogo = prompt("Qual a etapa do jogo? Digite SF para semi-final; DT para decisão de terceiro lugar; FI para final")
let categoriaDeJogo = Number(prompt("Qual a categoria? Digite 1, 2, 3, ou 4."))
let quantidade = Number(prompt("Quantos ingressos você deseja comprar?"))

if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoriaDeJogo === 1){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Nacional`)
    console.log("Etapa do jogo: Semi-final")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 1320
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: R$ ${valorIngressos}`)
    console.log(`Valor total: R$ ${valorTotal}`)
} else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoriaDeJogo === 2){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Nacional`)
    console.log("Etapa do jogo: Semi-final")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 880
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: R$ ${valorIngressos}`)
    console.log(`Valor total: R$ ${valorTotal}`)
}  else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoriaDeJogo === 3){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Nacional`)
    console.log("Etapa do jogo: Semi-final")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 550
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: R$ ${valorIngressos}`)
    console.log(`Valor total: R$ ${valorTotal}`)
}  else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoriaDeJogo === 4){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Nacional`)
    console.log("Etapa do jogo: Semi-final")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 220
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: R$ ${valorIngressos}`)
    console.log(`Valor total: R$ ${valorTotal}`)
} else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoriaDeJogo === 1){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Nacional`)
    console.log("Etapa do jogo: Decisão de 3º lugar")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 660
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: R$ ${valorIngressos}`)
    console.log(`Valor total: R$ ${valorTotal}`)
}  else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoriaDeJogo === 2){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Nacional`)
    console.log("Etapa do jogo: Decisão de 3º lugar")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 440
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: R$ ${valorIngressos}`)
    console.log(`Valor total: R$ ${valorTotal}`)
} else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoriaDeJogo === 3){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Nacional`)
    console.log("Etapa do jogo: Decisão de 3º lugar")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 330
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: R$ ${valorIngressos}`)
    console.log(`Valor total: R$ ${valorTotal}`)
} else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoriaDeJogo === 4){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Nacional`)
    console.log("Etapa do jogo: Decisão de 3º lugar")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 170
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: R$ ${valorIngressos}`)
    console.log(`Valor total: R$ ${valorTotal}`) //aqui o novo
} else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoriaDeJogo === 1){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Nacional`)
    console.log("Etapa do jogo: Final")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 1980
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: R$ ${valorIngressos}`)
    console.log(`Valor total: R$ ${valorTotal}`)
}  else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoriaDeJogo === 2){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Nacional`)
    console.log("Etapa do jogo: Final")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 1320
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: R$ ${valorIngressos}`)
    console.log(`Valor total: R$ ${valorTotal}`)
} else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoriaDeJogo === 3){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Nacional`)
    console.log("Etapa do jogo: Final")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 880
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: R$ ${valorIngressos}`)
    console.log(`Valor total: R$ ${valorTotal}`)
} else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoriaDeJogo === 4){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Nacional`)
    console.log("Etapa do jogo: Final")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 330
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: R$ ${valorIngressos}`)
    console.log(`Valor total: R$ ${valorTotal}`)
} else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoriaDeJogo === 1){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Internacional`)
    console.log("Etapa do jogo: Semifinal")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 1320 * 4.10
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: U$ ${valorIngressos}`)
    console.log(`Valor total: U$ ${valorTotal}`)
} else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoriaDeJogo === 2){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Internacional`)
    console.log("Etapa do jogo: Semifinal")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 880 * 4.10
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: U$ ${valorIngressos}`)
    console.log(`Valor total: U$ ${valorTotal}`)
} else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoriaDeJogo === 3){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Internacional`)
    console.log("Etapa do jogo: Semifinal")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 550 * 4.10
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: U$ ${valorIngressos}`)
    console.log(`Valor total: U$ ${valorTotal}`)
} else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoriaDeJogo === 4){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Internacional`)
    console.log("Etapa do jogo: Semifinal")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 220 * 4.10
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: U$ ${valorIngressos}`)
    console.log(`Valor total: U$ ${valorTotal}`)
} else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoriaDeJogo === 1){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Internacional`)
    console.log("Etapa do jogo: Decisão do 3º lugar")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 660 * 4.10
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: U$ ${valorIngressos}`)
    console.log(`Valor total: U$ ${valorTotal}`)
}  else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoriaDeJogo === 2){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Internacional`)
    console.log("Etapa do jogo: Decisão do 3º lugar")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 440 * 4.10
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: U$ ${valorIngressos}`)
    console.log(`Valor total: U$ ${valorTotal}`)
} else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoriaDeJogo === 3){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Internacional`)
    console.log("Etapa do jogo: Decisão do 3º lugar")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 330 * 4.10
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: U$ ${valorIngressos}`)
    console.log(`Valor total: U$ ${valorTotal}`)
} else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoriaDeJogo === 4){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Internacional`)
    console.log("Etapa do jogo: Decisão do 3º lugar")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 170 * 4.10
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: U$ ${valorIngressos}`)
    console.log(`Valor total: U$ ${valorTotal}`)
} else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoriaDeJogo === 1){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Internacional`)
    console.log("Etapa do jogo: Final")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 1980 * 4.10
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: U$ ${valorIngressos}`)
    console.log(`Valor total: U$ ${valorTotal}`)
}  else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoriaDeJogo === 2){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Internacional`)
    console.log("Etapa do jogo: Final")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 1320 * 4.10
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: U$ ${valorIngressos}`)
    console.log(`Valor total: U$ ${valorTotal}`)
}  else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoriaDeJogo === 3){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Internacional`)
    console.log("Etapa do jogo: Final")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 880 * 4.10
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: U$ ${valorIngressos}`)
    console.log(`Valor total: U$ ${valorTotal}`)
}  else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoriaDeJogo === 4){
    console.log("---Dados da Compra---")
    console.log(`Nome do cliente: ${nomeDoUsuario}`)
    console.log(`Tipo do jogo: Internacional`)
    console.log("Etapa do jogo: Final")
    console.log(`Categoria: ${categoriaDeJogo}`)
    console.log("---Valores---")

    let valorIngressos = 330 * 4.10
    let valorTotal = valorIngressos * quantidade
    
    console.log(`Valor do ingresso: U$ ${valorIngressos}`)
    console.log(`Valor total: U$ ${valorTotal}`)
}

*/