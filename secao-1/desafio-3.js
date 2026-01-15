//Inverta os valores sem criar novas variaveis

let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log("Esse é o valor antigo de A: 10, e esse é o novo valor do A: " + a);
console.log("Esse é o valor antigo de B: 20, e esse é o novo valor do B: " + b);

//Inverta os valores criando 1 nova variavel


let c = 10;
let d = 20;
let auxiliar = c;

c = d;
d = auxiliar;

console.log("Esse é o valor antigo de C: 10, e esse é o novo valor do A: " + c);
console.log("Esse é o valor antigo de D: 20, e esse é o novo valor do B: " + d);