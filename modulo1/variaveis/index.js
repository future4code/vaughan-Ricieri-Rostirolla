/*
1 - 10, 10 , 5 
2 - 10, 10, 10
3 - p = horasTrabalhadasPorDia, t = valorRecebidoPorDia, 
*/

let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);

//Apareceu como "undefined" que quer dizer não definida, pois ainda não definimos um valor para as variáveis em questão.

nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade?");

console.log(nome);
console.log(idade);

console.log(typeof nome);
console.log(typeof idade);

//As duas variáveis são do tipo string, pois tudo que damos como entrada no prompt retorna como string.

console.log("Olá", nome, "você tem", idade, "anos.");

//Escrevendo aqui para fazer a próxima etapa dos exercícios sem confundir.

let maiorDeIdade = prompt("Você tem mais de 18 anos?");
let temCNH = prompt("Você tem carteira de motorista?");
let temCarro = prompt("Você tem carro?");

let mairDe18Anos = maiorDeIdade;
let temCarteiraDeMotorista = temCNH;
let temVeiculo = temCarro;

console.log("Você tem mais de 18 anos?", mairDe18Anos);
console.log("Você tem carteira de motorista?", temCarteiraDeMotorista);
console.log("Você tem carro?", temVeiculo);

//Escrevendo aqui para fazer a próxima etapa dos exercícios sem confundir.

let a = 10;
let b = 25;

c = b;
b = a;
a = c;

console.log(a, b);

/*
    A lógica ficaria a que está descrita acima, onde:
    "c" seria igual a variante "b" (antes de ter uma mudança)
    "b" seria igual a "a" (antes de ter uma mudança) 
    por fim "a" seria igual "c" que já tinha assumido o valor de "b" no inicio do código
*/
