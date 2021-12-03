/*Respostas do exercício (1) de interpretação de código
    a) O que vai ser impresso no console?
    Vai ser impresso: 
    10 
    50

    b)O que aconteceria se retirasse os dois console.log
    e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
    O programa rodaria igual, porém nao seria impresso nada no console.


Respostas do exercício (2) de interpretação de código 
    a)Explique o que essa função faz e qual é sua utilidade
    A função vai passar o texto inserido pelo usuário pela função de deixar todas as letras do texto
    em minúsculo e procurar se tem a palavra cenoura texto, retornando um booleano da função.

    b)Determine qual será a saída no console para cada uma das 3 entradas do usuário:
    i. true
    ii. true
    iii. false
*/

//Respostas do exercício (1) de escrita de código
    //a)
function informations(){
    console.log("Eu sou Ricieri, tenho 32 anos, moro em Osório e sou estudante.")

}

const mensagemDoEditor = informations();

    //b)
function informationsUser(nome, idade, cidade, profissão){
    nome = prompt("Digite o seu nome:")
    idade = prompt("Digite a sua idade (somente números):")
    cidade = prompt("Digite a cidade que você mora:")
    profissão = prompt("Digite a sua profissão:")
 
    const respostas = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`)
    
    return respostas 
}

const respostasDoUsuario = informationsUser();
console.log(respostasDoUsuario);


//Respostas do exercício (1) de escrita de código
    //a)
function somarDoisNumeros(primeiroNumero, segundoNumero){
    
    const somaFeita = primeiroNumero + segundoNumero

    return somaFeita
}

const minhaSoma = somarDoisNumeros(10, 20);
console.log(minhaSoma);

    //b)
function conferirDoisNumeros(primeiroNumero, segundoNumero){
    const pirmeiroMaiorQueOSegundo = primeiroNumero >= segundoNumero

    return pirmeiroMaiorQueOSegundo
}

const duvida = conferirDoisNumeros(10, 20);
console.log(duvida);


    //c) REFAZER
function ePar(numero){
    numero = numero % 2
    numero = numero === 0
    
    return numero
}

const seraQueEPar = ePar(20);
console.log(seraQueEPar);


    //d)
function tamanhoEMaiusculo(mensagem){
    mensagem = (mensagem.toUpperCase() + `: A mensagem contém: ${mensagem.length} caracteres`) 

    return mensagem
}

const minhaMensagem = tamanhoEMaiusculo(`Olá! Mundo!`);
console.log(minhaMensagem);


//Respostas do exercício (3) de escrita de código
function operacoes(numero1, numero2){
    const soma = numero1 + numero2
    const subtracao = numero1 - numero2
    const multiplicacao = numero1 * numero2
    const divisao = numero1 / numero2    

    console.log(soma, subtracao, multiplicacao, divisao)

    return 
}

const numero1DoUsuario = Number(prompt("Digite um número:"));
const numero2DoUsuario = Number(prompt("Digite um número:"));

const resultadosDoUsuario = operacoes(numero1DoUsuario, numero2DoUsuario);