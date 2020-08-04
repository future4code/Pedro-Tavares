/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



console.log("Bem-vinde ao jogo de Blackjack!")

if (confirm("Quer iniciar nova rodada?")) {

   let primeiraCartaUsuario = comprarCarta()
   let segundaCartaUsuario = comprarCarta()
   let pontuacaoTotalUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor

   console.log(`Usuário - Cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto}- pontuação: ${primeiraCartaUsuario.valor + segundaCartaUsuario.valor}`)

   let primeiraCartaPc = comprarCarta()
   let segundaCartaPc = comprarCarta()
   let pontuacaoTotalPc = primeiraCartaPc.valor + segundaCartaPc.valor

   console.log(`Computador - Cartas: ${primeiraCartaPc.texto} ${segundaCartaPc.texto} - pontuação: ${primeiraCartaPc.valor + segundaCartaPc.valor}`)

   if (pontuacaoTotalUsuario < pontuacaoTotalPc) {
      console.log("O computador ganhou!")
   } else if (pontuacaoTotalUsuario > pontuacaoTotalPc) {
      console.log("O usuário ganhou!")
   } else {
      console.log("Empate!")
   }

} else {
   console.log("O jogo acabou!")
}


/* RESOLVI DEIXAR TODA A LOUCURA QUE FIZ, ABAIXO DESSE COMENTÁRIO, PARA RESOLVER O EXERCÍCIO PRA EU VER DEPOIS*/

//  console.log("Bem-vinde ao jogo de Blackjack!")

//  if(confirm("Quer iniciar uma nova rodada?")){
//    for (let i = 1; i < 3; i++){
//       const carta = comprarCarta()
//       console.log(carta.texto)
//       console.log(carta.valor)
//    }

//    for (let i = 1; i < 3; i++){
//       const carta = comprarCarta()
//       let cartasUsuario = carta.texto
//       let pontuacaoUsuário = carta.valor



//    }
//    console.log(`Usuário - cartas: ${cartasUsuario} - pontuação ${pontuacaoUsuário}`)






//  } else {
//     console.log("O jogo acabou.")
//  }


//  console.log("Bem-vinde ao jogo de Blackjack!")

//  if(confirm("Quer iniciar uma nova rodada?")){

//       let i = 1
//       while (i < 3){
//          const carta = comprarCarta()
//          let pontuacaoUsuário = carta.valor
//          let cartasUsuario = [carta.texto]
//          // cartasUsuario.push(carta.texto)
//          i++

//          if (cartasUsuario.length > 0){
//             cartasUsuario.push(carta.texto)

//             console.log(cartasUsuario)
//          }
//          // console.log(`Usuário - cartas: ${cartasUsuario} - pontuação ${pontuacaoUsuário}`)

//       }
//    } else {
//     console.log("O jogo acabou.")
//  }

// console.log("Bem-vinde ao jogo de Blackjack!")
// if(confirm("Quer iniciar uma nova rodada?")){
//    for (i = 1; i < 3; i++){
//       const carta = comprarCarta()
//       let pontuacaoUsuário = []
//       pontuacaoUsuário.push(Array(carta.texto))

//       if (i !== true) {
//          console.log(`Suas cartas foram ${pontuacaoUsuário}`)
//       }

//    }

// }

// console.log("Bem-vinde ao jogo de Blackjack!")
// if(confirm("Quer iniciar uma nova rodada?")){
//    for (i = 1; i < 3; i++){
//       const carta = comprarCarta()
//       let cartasUsuario = carta.texto         
//       //console.log(`Suas cartas foram ${cartasUsuario}`)
//       let pontuacaoUsuário = carta.valor
//       //console.log(`Sua pontuação foi de ${carta.valor}`)

//       if (i === 1){
//          let carta1Usuario = carta.texto 
//          let pontuacao1Usuario = carta.valor
//          console.log(`Usuário: Sua primeira carta é ${carta1Usuario} e pontuação dessa carta é: ${pontuacao1Usuario}`)
//    } else {
//       let carta2Usuario = carta.texto
//       let pontuacao2Usuario = carta.valor
//       console.log(`Usuário: Sua segunda carta é ${carta2Usuario} e a pontuação dessa carta é: ${pontuacao2Usuario}`)

//    }

// }

// for (i = 1; i < 3; i++){
//    const carta = comprarCarta()
//    let cartasUsuario = carta.texto         
//    //console.log(`Suas cartas foram ${cartasUsuario}`)
//    let pontuacaoUsuário = carta.valor
//    //console.log(`Sua pontuação foi de ${carta.valor}`)

//    if (i === 1){
//       let carta1Usuario = carta.texto 
//       let pontuacao1Usuario = carta.valor
//       console.log(`Computador: a primeira carta é ${carta1Usuario} e pontuação dessa carta é: ${pontuacao1Usuario}`)
// } else {
//    let carta2Usuario = carta.texto
//    let pontuacao2Usuario = carta.valor
//    console.log(`Computador: A segunda carta é ${carta2Usuario} e a pontuação dessa carta é: ${pontuacao2Usuario}`)

// }

// }

// }
