// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui

  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite um valor para altura:"))
  const largura = Number(prompt("Digite um valor para largura:"))
  
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite em qual ano estamos:"))
  const anoNascimento = Number(prompt("Digite o seu ano de nascimento"))
  
  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
   altura = Math.pow(altura,2)

  return peso / altura
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt("Digite o seu nome:")
  const idadeUsuario = prompt("Digite a sua idade (somente números):")
  const emailUsuario = prompt("Digite o seu e-mail:")

  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const corPreferida1 = prompt("Digite a sua cor preferida:")
  const corPreferida2 = prompt("Digite outra cor preferida:")
  const corPreferida3 = prompt("Digite uma outra cor preferida:")
  
  console.log([corPreferida1, corPreferida2, corPreferida3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  string = string.toUpperCase()

  return string
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanho1 = string1.length
  const tamanho2 = string2.length
  const comparacao = tamanho1 === tamanho2

  return comparacao
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const tamanhoArray = array.length -1

  return array[tamanhoArray]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const ultimoValor = array.pop()
  array.push(array[0])
  array.splice(0,1,ultimoValor)
  return array  
} 

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  string1 = string1.toUpperCase()
  string2 = string2.toUpperCase()
  const saoIguais = string1 === string2

  return saoIguais
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}