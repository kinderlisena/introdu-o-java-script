let valorEmprestimo = 5;
let meses = 3;
let jurosAoMes = 0.1; //10%;

let valorJuros = valorEmprestimo * meses * jurosAoMes;
let valorFinal = valorJuros + valorEmprestimo;

console.log('O valor final é R$', valorFinal);