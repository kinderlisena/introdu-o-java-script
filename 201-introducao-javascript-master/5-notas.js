// receber nota prova 1 
let prova1 = 5;

// receber nota prova 2
let prova2 = 7; 

// receber nota trabalho
let trabalho = 3;

// receber valor de aprovacao
let mediaAprovacao = 7;

// somar prova 1, prova 2 e trabalho e dividir por 3
let mediaAluno = (prova1 + prova2 + trabalho) / 3;

// se a media for maior ou igual que o valor de aprovacao
if(mediaAluno >= mediaAprovacao){
    // imprima O aluno foi aprovado
    console.log('O aluno foi aprovado');
} else {// caso contrário
    // imprima O aluno foi reprovado
    console.log('O aluno foi reprovado');
}