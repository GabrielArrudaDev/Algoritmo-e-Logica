//Calcule o juros simples utilizando a formula ( J=P*i*n) onde:
/*
J = Juros;
P = valor do presente
i = Taxa de juros (0,5%)
n = número de parcelas
*/


let presente = 129.90;
let taxaJuros = 0.005; // i (Taxa de juros): 0,5% (para cálculos, usamos a forma decimal: $0,5 / 100 = 0,005$)
let parcelas = 5;
let juros = presente * taxaJuros * parcelas
let valorFinal = presente+juros;


console.log(juros.toFixed(2));
console.log(valorFinal.toFixed(2));



