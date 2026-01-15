//Estruturas condicionais
/*
  if, else, else if (se, senão, senão se, )
  for, while, do-while
  switch
 */

const idade = 17;
if (idade >= 18){
    console.log("Você é maior de idade");
}else {
    console.log("Você é menor de idade");
}

const idade2 = 17;
if (idade2 >= 25) {
    console.log("Você tem idade para casar");
} else if (idade2 >= 18) {
    console.log("Você tem idade para namorar");
} else {
    console.log("Você é de menor, vai estudar");
}
    
const valorProduto = 500;

if (valorProduto >= 500) {
    console.log("Você recebeu frete grátis!");
} else {
    console.log("Você não recebeu frete grátis");
    
}
  