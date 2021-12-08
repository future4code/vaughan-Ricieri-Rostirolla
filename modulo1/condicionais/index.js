/*Respostas do exercício (1) de interpretação de código
    a)
    O teste pega o número informado pelo usuário e ve se ele tem resto.
    se o resto for igual a 0 ele recebe a informação que passou no teste, 
    caso não, recebe que não pasou no teste.

    b)
    Para números pares.

    c)
    Para números impares.


Respostas do exercício (2) de interpretação de código
    a)
    Serve para imprimir a mensagem contendo qual a fruta e seu respectivo preço.

    b)
    O preço da fruta, maça é R$2.25 preço.

    c)
    O preço da fruta pêra é R$5 preco.


Respostas do exercício (3) de interpretação de código
    a)
    A primeira linha está descrevendo uma variável (numero), onde é solicitado ao
    usúario que digite um número.

    b)
    Digitando 10 teriamos: Esse número passou no teste
                           
    
    Digitando -10 não teriamos mensagem.

    c)
    Sim terá um erro, pois após o bloco IF tem um console.log que está chamando
    uma variável que está dentro do escopo filho, que não é acessível para o escopo pai.
*/


//Respostas do exercício (1) de escrita de código
    //a) e b)
const idade = Number(prompt("Digite a sua idade:"));

    //c)
if (idade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}


//Respostas do exercício (2) de escrita de código
const turnoDeEstudos = prompt("Digite em qual turno você estuda, sendo: M para matutino, V para vespertino ou N para noturno:")

function saudacaoAluno(turno) {
    if (turno === "M") {
        console.log("Bom dia!")
    }else if (turno === "V") {
        console.log("Boa tarde!")
    }else {
        console.log("Boa noite!")
    }      
}

saudacaoAluno(turnoDeEstudos)


//Respostas do exercício (3) de escrita de código

function saudacaoAlunoSwitch(estudo){
    switch(estudo) {
        case "M":
            console.log("Bom dia!")
        break

        case "V":
            console.log("Boa tarde!")
        break

        default:
            console.log("Boa noite!")
    }
}
saudacaoAlunoSwitch(turnoDeEstudos)


//Respostas do exercício (4) de escrita de código
const generoFilme = prompt("Digite o genero do filme que quer assistir:")
const valorDoIngresso = Number(prompt("Digite até qual valor do ingresso você está disposto a pagar para assitir o fime:"))

function vamosVerOFilmer(tipoFilme, valorPago){
    if (tipoFilme === "Fantasia" && valorPago <= 15){
        console.log("Bom filme!")
    }else {
        console.log("Escolha outro filme :(")
    }
}

vamosVerOFilmer(generoFilme, valorDoIngresso)


//Respostas do desafio (1)
const generoFilme1 = prompt("Digite o genero do filme que quer assistir:")
const valorDoIngresso1 = Number(prompt("Digite até qual valor do ingresso você está disposto a pagar para assitir o fime:"))

function vamosVerOFilmerEComerAlgo(tipoFilme1, valorPago1){
    const lanche = prompt("Digite qual lanche vai comprar para ver o filme:")
    if (tipoFilme1 === "Fantasia" && valorPago1 <= 15){
        console.log(`Bom filme!`)
        console.log(`Aproveite o(a) seu(ua) ${lanche}`)
    }else {
        console.log("Escolha outro filme :(")
    }
}

vamosVerOFilmerEComerAlgo(generoFilme1, valorDoIngresso1)


//Respostas do desafio (2)
const nomeCompleto = prompt("Digite o seu nome completo:")

let tipoDeJogo = prompt("Digite qual tipo de partida deseja assistir, sendo IN para partidas internacionais e DO para domésticas")
    if (tipoDeJogo === "IN"){
        tipoDeJogo = "Internacional"
    } else {
        tipoDeJogo = "Doméstico"
    }

let etapaDoJogo = prompt("Digite qual etapa da competição deseja assistir, sendo SF para semi-final, DT para decisão de terceiro lugar e FI para final:")
    if (etapaDoJogo === "SF"){
        etapaDoJogo = "Semi-final"
    } else if (etapaDoJogo === "DT"){
        etapaDoJogo = "Decisão de terceiro lugar"
    } else {
        etapaDoJogo = "Final"
    }

const categoria = Number(prompt("Digite qual a categoria desejada, sendo possível escolher entre: 1, 2, 3 ou 4:"))
const quantidadeDeIngressos = Number(prompt("Digite quantos ingressos deseja comprar:"))


function comprarIngresso(nome, jogo, etapa, arquibancada, quantidade){
    let custo = 0

    if (jogo === "Doméstico" && etapa === "Semi-final" && arquibancada === 1){
        custo = 1320
    } else if (jogo === "Doméstico" && etapa === "Semi-final" && arquibancada === 2){
        custo = 880
    } else if (jogo === "Doméstico" && etapa === "Semi-final" && arquibancada === 3){
        custo = 550
    } else if (jogo === "Doméstico" && etapa === "Semi-final" && arquibancada === 4){
        custo = 220
    } else if (jogo === "Doméstico" && etapa === "Decisão de terceiro lugar" && arquibancada === 1){
        custo = 660
    } else if (jogo === "Doméstico" && etapa === "Decisão de terceiro lugar" && arquibancada === 2){
        custo = 440
    } else if (jogo === "Doméstico" && etapa === "Decisão de terceiro lugar" && arquibancada === 3){
        custo = 330
    } else if (jogo === "Doméstico" && etapa === "Decisão de terceiro lugar" && arquibancada === 4){
        custo = 170
    } else if (jogo === "Doméstico" && etapa === "Final" && arquibancada === 1){
        custo = 1980
    } else if (jogo === "Doméstico" && etapa === "Final" && arquibancada === 2){
        custo = 1320
    } else if (jogo === "Doméstico" && etapa === "Final" && arquibancada === 3){
        custo = 880
    } else if (jogo === "Doméstico" && etapa === "Final" && arquibancada === 4){
        custo = 330
    } else if (jogo === "Internacional" && etapa === "Semi-final" && arquibancada === 1){
        custo = (1320 * 4.1)
    } else if (jogo === "Internacional" && etapa === "Semi-final" && arquibancada === 2){
        custo = (880 * 4.1)
    } else if (jogo === "Internacional" && etapa === "Semi-final" && arquibancada === 3){
        custo = (550 * 4.1)
    } else if (jogo === "Internacional" && etapa === "Semi-final" && arquibancada === 4){
        custo = (220 * 4.1)
    } else if (jogo === "Internacional" && etapa === "Decisão de terceiro lugar" && arquibancada === 1){
        custo = (660 * 4.1)
    } else if (jogo === "Internacional" && etapa === "Decisão de terceiro lugar" && arquibancada === 2){
        custo = (440 * 4.1)
    } else if (jogo === "Internacional" && etapa === "Decisão de terceiro lugar" && arquibancada === 3){
        custo = (330 * 4.1)
    } else if (jogo === "Internacional" && etapa === "Decisão de terceiro lugar" && arquibancada === 4){
        custo = (170 * 4.1)
    } else if (jogo === "Internacional" && etapa === "Final" && arquibancada === 1){
        custo = (1980 * 4.1)
    } else if (jogo === "Internacional" && etapa === "Final" && arquibancada === 2){
        custo = (1320 * 4.1)
    } else if (jogo === "Internacional" && etapa === "Final" && arquibancada === 3){
        custo = (880 * 4.1)
    } else {
        custo = (330 * 4.1)
    }


const total = custo * quantidade
    
console.log(`---Dados da compra---
Nome do cliente: ${nome}
Tipo do Jogo: ${jogo}
Etapa do jogo: ${etapa}
Categoria: ${arquibancada}
Quantidade de ingressos: ${quantidade}
---Valores---
Valor do ingresso: R$ ${custo}
Valor total: R$ ${total}`)

}

comprarIngresso(nomeCompleto, tipoDeJogo, etapaDoJogo, categoria, quantidadeDeIngressos)