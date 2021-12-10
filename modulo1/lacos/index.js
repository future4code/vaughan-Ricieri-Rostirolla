/*Resposta do exercício (1) de interpretação de código
    a)Ele está pegando a variável "valor" e está atribuindo um valor a mais
    de si mesmo para cada vez que ela passa pelo laço for até ela ser maior a 5.

    b) Ele imprimiu 10, pois somou todos os valores anteriores apresentados até 
    chegar o 5.


Resposta do exercício (2) de interpretação de código
    a) Vão ser impressos todos os números maiores que 18.
    19, 21, 23, 25, 27, 30

    b) Não é possível pois o for...of... é utilizados para quando
    há o acesso ao dados do indice.


Resposta do exercício (3) de interpretação de código
O resultado seria:
*
**
***
****

*/

//Resposta do exercício (1) de escrita de código
const quantosPetsOUsuarioTem = Number(prompt("Digite quantos pets você tem:"))
let arrayPets = []

if (quantosPetsOUsuarioTem <= 0) {
    console.log("Que pena! Você pode adotar um pet!")
}else if (quantosPetsOUsuarioTem > 0) {
    for (let qunatosPets = 0; qunatosPets < quantosPetsOUsuarioTem; qunatosPets++) {
        nomeDosPets = prompt("Qual o nome do seu pet?")
        arrayPets.push(nomeDosPets)
        
    } 
    console.log(`Os nomes dos pets são: ${arrayPets}`)
}



//Resposta do exercício (2) de escrita de código
//Resposta a)
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function descobrirDadosDoArray(array) {
     for (numero of array){
         console.log(numero)
     }
}
    
descobrirDadosDoArray(array)
    

//Resposta b)
function descobrirDadosDoArrayDivididos(array) {
    for (numero of array){
        console.log(numero / 10)
    }
}

descobrirDadosDoArrayDivididos(array)


//Resposta c)
function descobrirNumerosParesDoArray(novoArray) {
    let outroArray = []
    for (numero of novoArray) {
        if ((numero % 2) === 0) {
            outroArray.push(numero)    
        }
    }
    console.log(outroArray)
}

descobrirNumerosParesDoArray(array)


//Resposta d)
function imprimirArrayDeStrings (array){
    let arrayDeStrings = []
    let i = 0

    for(let valor of array) {
      arrayDeStrings.push(`O elemento do índex ${i} é: ${valor}`); i++
    }

    console.log(arrayDeStrings)
  }

imprimirArrayDeStrings (array)
 


//Resposta e)
let maiorNumero = 0;
let menorNumero = 1000

for(numeroDoArray of array) {
    if (maiorNumero < numeroDoArray){
        maiorNumero = numeroDoArray
    }else if (menorNumero > numeroDoArray) {
        menorNumero = numeroDoArray
    }
    
    }

    console.log(`O maior número é ${maiorNumero} e o menor número é ${menorNumero}`)