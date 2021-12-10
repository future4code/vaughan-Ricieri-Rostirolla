console.log("Boas vindas ao de Blackjack!");

function start() {
   const primeiraCartaUsuario = comprarCarta();
   const segundaCartaUsuario =  comprarCarta();

   const primeiraCartaComputador = comprarCarta();
   const segundaCartaComputador =  comprarCarta();
   
   const pontuacaoUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
   const pontuacaoComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor
   
   console.log(`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - pontuação ${pontuacaoUsuario}`)
   console.log(`Computador - cartas: ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - pontuação ${pontuacaoComputador}`)
   
   if (pontuacaoUsuario > pontuacaoComputador) {
      console.log("O usuário ganhou!")
   } else if (pontuacaoComputador > pontuacaoUsuario) {
      console.log("O computador ganhou!")
   } else {
      console.log("Empate")
   }

   if (confirm("Quer iniciar uma nova rodada?")) {
      start()
   } else {
      console.log("O jogo acabou");
   }

}

start()