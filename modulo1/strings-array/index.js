/*Resposta exercício de interpretação de código
    
    Exercício 1
    a) undefined
    b) null
    c) 11
    d) 3, pois o index o é o 3
    e) Ele trocaria o item da index 1 pelo número 19
    f) 9, pois ele pegaria o item da index 10 (i +1)

    Exercício 2
    "SUBI NUM ÔNIBUS EM MIRROCOS" 27*/

//Resposta exercício de escrita de código (1)

const nome = prompt("Digite o seu nome:");
const email = prompt("Digite o seu e-mail:");

console.log(`O e-mail ${email.trim()} foi cadastrado com sucesso. Seja bem-vindo(a), ${nome}!`);

//Resposta exercício de escrita de código (2)

let listaComidasPreferidas = ["Lasanha", "Pizza", "Hamburguer", "Churrasco", "Batata Frita"];

    //a)Imprima no console o array completo
console.log(listaComidasPreferidas);

    //b)Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.
console.log(`Essas são as minhas comidas preferidas:`)
console.log(listaComidasPreferidas[0]);
console.log(listaComidasPreferidas[1]);
console.log(listaComidasPreferidas[2]);
console.log(listaComidasPreferidas[3]);
console.log(listaComidasPreferidas[4]);

    //c)Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista
const comidaPreferidaDoUsuario = prompt("Digite a sua comida preferida:");

listaComidasPreferidas.splice(1,1, comidaPreferidaDoUsuario)

console.log(listaComidasPreferidas)
     
//Resposta exercício de escrita de código (3) 

    //a)Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
const listaDeTarefas = []

     //b)Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
const tarefa1 = prompt("Digite uma tarefa do seu dia:");
const tarefa2 = prompt("Digite uma tarefa do seu dia:");
const tarefa3 = prompt("Digite uma tarefa do seu dia:");

listaDeTarefas.push(tarefa1);
listaDeTarefas.push(tarefa2);
listaDeTarefas.push(tarefa3);

     //c)Imprima o array no console
 console.log(listaDeTarefas);

     //d)Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
 let indiceUsuario = Number(prompt("Digite o índice de uma tarefa, que você acabou de digitar [0, 1, 2]:"));

     //e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(indiceUsuario, 1);

console.log("A nova lista de tarefas é:", listaDeTarefas);


//Resposta desafio (1)
let frase = prompt("Digite uma frase:");

frase = frase.split(" ");

console.log(frase);

//Resposta desafio (2)
const listaDeFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
console.log(listaDeFrutas)

const encontreiOAbacaxi = listaDeFrutas.indexOf("Abacaxi");

console.log(listaDeFrutas.length, encontreiOAbacaxi);