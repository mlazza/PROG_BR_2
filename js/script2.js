// EXERCICIOS DAS AULAS DE JS

//alert("Bom dia")
//var nome = prompt("qual o seu nome?")
//alert("Bom dia " + nome)

//var num = parseInt(prompt("Digite um numero"))
//var dobro = num + num
//alert("O dobro do numero que voce digitou é " + dobro)

// ESTRUTURAS CONDICIONAIS
/*
var idade = 77;
var cara_de_novo = true;

if(idade >= 35 && idade <= 70)
    console.log("pode")
else if(idade >= 18 || cara_de_novo) {
    console.log("pode")
    console.log("mostre o RG")
}
else
    console.log("não pode")

*/

// OPERADOR TERNARIO
/*
idade = 26;

idade >= 18 ? console.log("pode entrar") : console.log("não pode entrar")

var pode = idade >= 18 ? true : false;

console.log(pode)

// SWITCH

var nota1 = 10.0;
var nota2 = 10.0;

var media = (nota1 + nota2) / 2;

switch(true){
    case media == 10:
        console.log("Excelencia")
        break;
    case media >= 8:
        console.log("Ótimo")
        break;
    case media >= 6:
        console.log("Regular")
        break;
    default: 
        console.log("Ruim")
        break;
}
*/

// FOR and WHILE
/*
var num = 5;

for(var i = 0; i < num; i++) {
    console.log(i)
}

var num2 = 0;

while(num2 < 10){
    console.log("numero " + num2)
    num2++;
}

var numero = Math.random() * 100;

console.log(numero);
*/

// ARRAY
/*
var alunos = new Array("Igor", "José", "Tony", "Julia");

console.log(alunos[3]);
console.log(alunos.length);

for (var i = 0; i < alunos.length; i++){
    console.log(alunos[i])
}

// outra forma do 'for' para ver o Array

for (var i in alunos) {
    console.log(alunos[i])
}

//outra - pelo elemento
for (var aluno of alunos){
    console.log(aluno)
}
*/

// FUNCOES
/*
function media(n1, n2) {
    var n1 = n1;
    var n2 = n2;
    var media = (n1+n2)/2;
    //console.log(media);

    return media;
}

var resultado = media(8, 10);
console.log(resultado);

function saudacao(){
    return "Ola mundo"
}

// Atribuindo funcao a uma variavel
var s = saudacao;

console.log(s());

// Funcoes anonimas
var media2 = function(n1, n2){
    return (n1+n2)/2;
}

console.log(media2(5,6));
*/

// Juntando tudo até aqui

// Nome do aluno - n1 - n2 - media - resultado

var nomes = ["Igor", "Jose", "Maria"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];

function media(n1, n2){
    return (n1+n2)/2
}

function resultado(media){
    
    if (media >= 7){
        return "aprovado";
    } else {
        return "reprovado";
    }
}

for(index in nomes){
    
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    
    var m = media(nota1, nota2);

    console.log(nomes[index] + " - " + 
                nota1 + " - " +
                nota2 + " - " + 
                m + " - " + 
                resultado(m));
}
