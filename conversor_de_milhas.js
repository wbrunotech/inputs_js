// Conversor de Milhas para Quilômetros

import entradaDados from 'readline-sync';

console.log("Conversor de Milhas para Quilômetros: \n");

let mi = entradaDados.question("informe o valor em Milhas: ");

let km = mi / 0.62137;

console.log(mi+"mi equivale a "+km+"km");
