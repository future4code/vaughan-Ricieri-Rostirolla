/*Resposta exercício interpretação 1
    1- a. true, pois os dois boolean são true;
    2- b. false, pois o bool2 = false;
    3- c. true
    4- d. boolean

Resposta exercício interpretação 2 
    Iria retornar uma concatenação ou um erro, pois faltou
    converter os retornos dos prompts para number, visto que
    o comando prompt sempre retorna uma string.

Resposta exercício interpretação 3
    let primeiroNumero = Number(prompt("Digite um numero!"));
    let segundoNumero = Number(prompt("Digite outro numero!"));

    const soma = primeiroNumero + segundoNumero;

    console.log(soma);

    Com essa alteração vai retornar o valor desejado da soma.*/

//Resposta exercício código 1
const idadeDoUsuario = Number(prompt("Digite a sua idade:"));
const idadeDoMelhorAmigo = Number(prompt("Digite a idade do(a) seu(ua) melhor amigo(a)"));

const idadeMaior = idadeDoUsuario > idadeDoMelhorAmigo;

console.log("Sua idade é maior do que a do seu melhor amigo(a)?", idadeMaior);

const diferencaIdade = idadeDoUsuario - idadeDoMelhorAmigo;

console.log("A diferença da idade de vocês é:", diferencaIdade, "anos.");


//Resposta exercício código 2
const numeroPar = Number(prompt("Digite um número par:"));

console.log("O resto da divisão é", numeroPar % 2);

    //sempre que um número é par o resto da divisão deu 0 como resposta
    //sempre que um número é par o resto da divisão deu 1 como resposta


//Resposta exercício código 3
const idade = Number(prompt("Digite quantos anos você tem:"));

console.log("A sua idade em meses é:", (idade * 12));
console.log("A sua idade em dias é:", (idade * 365));
console.log("A sua idade em horas é:", (idade * 87602));


//Resposta exercício código 4
const numero1 = Number(prompt("Digite um número:"));
const numero2 = Number(prompt("Digite um número:"));

const pergunta1 = numero1 > numero2;
const pergunta2 = numero1 === numero2;
const pergunta3 = (numero1 % numero2) === 0;
const pergunta4 = (numero2 % numero1) < 1;

console.log("O primeiro numero é maior que segundo?", pergunta1);
console.log("O primeiro numero é igual ao segundo?", pergunta2);
console.log("O primeiro numero é divisível pelo segundo?", pergunta3);
console.log("O segundo numero é divisível pelo primeiro?", pergunta4);


//Resposta desafio 1 
    //a)
const Fahrenheit = 77

const Kelvin = (Fahrenheit - 32)*(5/9) + 273.15

console.log("Hoje está:", Kelvin,"°K");

    //b)
const Celsius = 80;

const Fahrenheit = (Celsius)*(9/5) + 32;

console.log("Hoje está:", Fahrenheit,"°F");


    //c)
const Celsius = 30;

const Fahrenheit = (Celsius)*(9/5) + 32;
const Kelvin = (Fahrenheit - 32)*(5/9) + 273.15;

console.log("Hoje está:", Fahrenheit,"°F");
console.log("Hoje está:", Kelvin,"°K");


    //d)
const Celsius = Number(prompt("Insira a temperatura em Graus Celsius (°C):"));

const Fahrenheit = (Celsius)*(9/5) + 32;
const Kelvin = (Fahrenheit - 32)*(5/9) + 273.15;

console.log("Hoje está:", Fahrenheit,"°F");
console.log("Hoje está:", Kelvin,"°K");


//Resposta desafio 2
    //a)
const quilowattHora = 0.05;

const quilowattHora280 = quilowattHora * 280;

console.log("O valor da sua conta de energia é:", quilowattHora280);

    //b)
const quilowattHoraComDesconto = (quilowattHora280 - ((15 / 100) * quilowattHora280));

console.log("O valor da sua conta de energia com desconto é:", quilowattHoraComDesconto);


//Resposta desafio 3
    //a)
const libra = 20;

const equivaleKg = libra / 2.205;

console.log("20lb equivalem a", equivaleKg, "kg");

    //b)
const onca = 10.5;

const kgEquivale = onca / 35.274;

console.log("10.5oz equivalem a", kgEquivale, "kg");

    //c)
const milha = 100;

const metros = milha * 1609;

console.log("100mi equivalem a", metros, "m");

    //d)
const pes = 50;

const metrosParaPes = pes / 3.281;

console.log("50ft equivalem a", metrosParaPes, "m");

    //e)
const galao = 103.56;

const litro = galao * 3.806;

console.log("103.56gal equivalem a", litro, "l");

    //f)
const xicara = 450;

const litroPorXicara = xicara / 3.52;

console.log("450 xic equivalem a", litroPorXicara, "l");

    //g)
const libraDesejada = Number(prompt("Digite o valor de libra (lb) que deseja converter para quilograma (Kg)"));

const equivaleKgDeseado = libraDesejada / 2.205;

console.log("A equivalência é", equivaleKgDeseado, "kg");