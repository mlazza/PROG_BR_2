// POO
/*
var aluno = { 
    nome: "Igor", 
    notas: [7.5, 8.2],
}

var novaProp= "sobrenome";
aluno.matricula = 12345;
aluno[novaProp] = "Oliveira";




console.log(aluno["nome"]);
console.log(aluno.notas[1]);

console.log(aluno);
*/

// OUTRA FORMA DE CRIAR UM OBJETO
/*
var aluno = new Object();

aluno.nome = "Joao";
aluno.notas = [8, 9]

console.log(aluno);
*/

// METODOS

// variaveis do objeto = propriedades
// funcoes do objeto = metodos
/*
function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno2 = {
    nome: "Igor",
    notas: [5, 8],

    media: calcMedia
}

var aluno3 = {
    nome: "Jeremias",
    notas: [7, 10],

    media: calcMedia
}

console.log(aluno2.nome)
console.log(aluno2.media());

console.log(aluno3.nome)
console.log(aluno3.media());
*/

// CONSTRUTORES

// [A]
// var calcMedia = function(){
//     return (this.nota1 + this.nota2) / 2;
// }
// var turma = [
//     {
//         nome: "Igor",
//         nota1: 9,
//         nota2: 7,
//         media: calcMedia
//     },
//     {
//         nome: "Joao",
//         nota1: 4,
//         nota2: 6,
//         media: calcMedia
//     },

// ]

// var aluno = turma[0];
// console.log(aluno);
// console.log(aluno.media());


//[B]
// function criarAluno(nome, n1, n2){
//     return {
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         media: function () {
//             return (this.nota1 + this.nota2) / 2;
//         }
//     }
// }

// [C]

function aluno(nome, n1, n2){
    
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function (){
        return (this.nota1 + this.nota2) / 2;
    }
}

var a = new aluno("Igorezo", 8, 9);

console.log(a);
console.log(a.media());



// var turma = [
//     criarAluno("Igor", 8, 7),
//     criarAluno("Tadeu", 6, 7),
// ]

// var aluno = criarAluno("Jorge", 9, 4);
// var aluno = turma[1];

// console.log(aluno);
// console.log(aluno.media());

//Usando o forEach
// turma.forEach( function(elemento){
//     console.log(elemento.nome + " - " + elemento.media());
// })
