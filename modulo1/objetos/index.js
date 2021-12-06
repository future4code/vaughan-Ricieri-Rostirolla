/*Resposta exercício (1) de interpretação de código 
    Vai ser impresso no console:
        Matheus Nachtergaele
        Virginia Cavendish
        Globo 14h


/*Resposta exercício (2) de interpretação de código 
    a)Juca 3 SRD
      Juba 3 SRD
      Jubo 3 SRD
    
    b)A sintaxe dos três pontos antes do nome de um objeto, indica que estamos
    fazendo uma cópia do objeto indicado após os três pontos.


/*Resposta exercício (3) de interpretação de código
    a) false
       undefined
       Não consegi definir, tive que rodar o programa para saber a resposta
    
    b) Pelo que entendi rodando o programa, ele pegou a pessoa e puxou a informação
    contigo no "backender" que era false, na segunda opção retornou undefined, pois 
    não havia informações definidas em pessoa, "altura".
*/

//Resposta exercício (1) de escrita de código
    //a)
const nomeEApelidos = {
    nome: "Tobias",
    apelidos: ["Tóbi", "Bias", "Arnold"]
}

function compilaNomeEApelidos(nomeEApelidos) {
    console.log(`Eu sou ${nomeEApelidos.nome}, mas pode me chamar de: ${nomeEApelidos.apelidos}`)
}
compilaNomeEApelidos(nomeEApelidos)


    //b)
const novoNomeEApelidos = {
    ...nomeEApelidos,
    apelidos: ["Bi", "Totó", "Ias"]

}

compilaNomeEApelidos(novoNomeEApelidos)


//Resposta exercício (2) de escrita de código
    //a)
const usuario1 = {
    nome: "João",
    idade: 22,
    profissao: "estudante"
}

const usuario2 = {
    nome: "Maria",
    idade: 58,
    profissao: "empresária"
}

    //b)
function retornaArray(usuario) {
    usuario = [usuario.nome, usuario.nome.length, usuario.idade, usuario.profissao, usuario.profissao.length]

    return usuario
}

console.log(retornaArray(usuario1))
console.log(retornaArray(usuario2))


//Resposta exercício (3) de escrita de código
    //a)
const carrinho = []

    //b)
const fruta1 = {
    nome: "Banana",
    disponibilidade: true
}

const fruta2 = {
    nome: "Jabuticaba",
    disponibilidade: true
}

const fruta3 = {
    nome: "Morango",
    disponibilidade: true
}

    //c)
function enchendoCarrinho(compra) {
    carrinho.push(compra)

    console.log(carrinho)
}

enchendoCarrinho(fruta1)
enchendoCarrinho(fruta2) 
enchendoCarrinho(fruta3) 

//Resposta desafio (1)
function informarDadosDoUsuario(informacoes) {
    const nome = prompt("Digite o seu nome")
    const idade = prompt("Digite a sua idade")
    const profissao =  prompt("Digite a sua profissão")

    informacoes = [`Nome: ${nome}, profissão: ${profissao}, idade: ${idade}`]

    return (informacoes)
}

const dadosDoUsuario = {}

console.log(informarDadosDoUsuario(dadosDoUsuario))
console.log(typeof dadosDoUsuario)


//Resposta desafio (2)
function representandoFilmes(filme1, filme2) {
    const maisNovo = filme1.anoLancamento < filme2.anoLancamento
    const mesmoAno = filme1.anoLancamento === filme2.anoLancamento

    console.log(`O primeiro filme foi lançado antes do segundo? ${maisNovo}
O primeiro filme foi lançado no mesmo ano do segundo? ${mesmoAno}`)
}

const filme1 = {
    nome: "Mickey",
    anoLancamento: 1890
}

const filme2 = {
    nome: "Thor",
    anoLancamento: 2000
}

representandoFilmes(filme1, filme2)


//Resposta desafio (3)
function disponibilidadeDeFrutas(umaFruta) {
    umaFruta.disponibilidade = !umaFruta.disponibilidade

    return umaFruta
}

console.log(disponibilidadeDeFrutas(fruta1))
console.log(disponibilidadeDeFrutas(fruta2))
console.log(disponibilidadeDeFrutas(fruta3))