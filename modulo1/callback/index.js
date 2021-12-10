/*Resposta do exercício (1) de interpretação de código
Ele imprimi um novo array com o nome e o apelido de cada item do array original,
mais o indice dele no array original, mais o array original.


Resposta do exercício (2) de interpretação de código
Vai ser impresso um novo array com os nomes do array original.


Resposta do exercício (3) de interpretação de código
Vai ser impresso um novo array com todo os nomes e apelidos diferentes de "Chijo".

*/

//Resposta do exercício (1) de escrita de código
    //a)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

const nomeDosPets = pets.map((nome) => { 
    return nome.nome
})

console.log(nomeDosPets)


    //b)
const somenteOsSalsichas = pets.filter((raca) => {
    if (raca.raca === "Salsicha")
        console.log(raca)
})


    //c)
const paraPoodles = pets.filter((raca) => {
    if (raca.raca === "Poodle")
        return raca
})

const mensagemParaPoodles = paraPoodles.map((raca) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${raca.nome}`
})

console.log(mensagemParaPoodles)

//Resposta do exercício (2) de escrita de código
    //a)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const nomeDosItens = produtos.map((produto) => {
    return produto.nome
})

console.log(nomeDosItens)


    //b)
const produtosComDesconto = produtos.filter((produto) => {
    produto.preco = (produto.preco - produto.preco * (5/100) )
    return produto.preco
})

console.log(produtosComDesconto)


    //c)
const apenasAsBebidas = produtos.filter((produto) => {
    if (produto.categoria === "Bebidas") {
        return produto
    }
})

console.log(apenasAsBebidas)


    //d)
const produtosYpe = produtos.filter((produto) => {
    if (produto.nome.includes("Ypê")) {
        return produto
    }
})

console.log(produtosYpe)


    //e)
const compreIpe = produtos.filter((produto) => {
    if (produto.nome.includes("Ypê")) {
       return produto
    }
})

const mensagemCompreIpe = compreIpe.map((produto) => {
   return `Compre ${produto.nome} por ${produto.preco}`
})

console.log(mensagemCompreIpe)