function start() {
   const primeiraCartaUsuario = comprarCarta();
   const segundaCartaUsuario =  comprarCarta();
   let novaCartaUsuario = comprarCarta();
   let maoDoUsuario = [primeiraCartaUsuario.texto, segundaCartaUsuario.texto];

   const primeiraCartaComputador = comprarCarta();
   const segundaCartaComputador =  comprarCarta();
      
   let pontuacaoUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor;
   let pontuacaoMaoUsuario = [primeiraCartaUsuario.valor + segundaCartaUsuario.valor];
   let pontuacaoComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor;

   let mostrarJogo = confirm(`Suas cartas são ${maoDoUsuario}. A carta revelada do computador é ${primeiraCartaComputador.texto}. \nDeseja comprar mais uma carta?`);
  
   if (primeiraCartaUsuario && segundaCartaUsuario === "A") {
      primeiraCartaUsuario, segundaCartaUsuario;
   } else if (primeiraCartaComputador && segundaCartaComputador === "A") {
      primeiraCartaComputador, segundaCartaComputador;
   };
   
   if (mostrarJogo) { 
      maoDoUsuario.push(novaCartaUsuario.texto)
      pontuacaoMaoUsuario.push(novaCartaUsuario.valor)
   };
   
   console.log(`Soma da mão do usuário antes do FOR ${pontuacaoMaoUsuario}`)

   for(var i = 0; i < pontuacaoMaoUsuario; i++){
      var somaPontuacaoMaoUsuario = pontuacaoMaoUsuario + pontuacaoMaoUsuario[i];
   } 

   console.log(maoDoUsuario)
   console.log(somaPontuacaoMaoUsuario)
   //TRAVEI AQUI! NÃO CONSIGO FAZER A SOMA DO VALOR DA NOVA CARTA SORTEADA COM O ARRAY ANTIGO (PROVAVLMENTE POR NÃO SABER LIDAR COM LOOPS)

   if ((pontuacaoUsuario <= 21) > pontuacaoComputador) {
      alert("O usuário ganhou!");
   } else if ((pontuacaoComputador <= 21) > pontuacaoUsuario) {
      alert("O computador ganhou!");
   } else {
      alert("Empate")
   };
   
   if (confirm("Quer iniciar uma nova rodada?")) {
      start();
   } else {
      alert("O jogo acabou");
   };
   
};
   
start();