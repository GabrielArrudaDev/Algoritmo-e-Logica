for (let i = 0; i < 5; i++) {
    console.log("Sequencia do -for- número: " + i);
}

let valor = 0;
while (valor <5) {
    valor++;
    console.log("Sequencia do -while- número: " + valor);
}

let contador = 0;

do {
    console.log("Esse é o número: " + contador);
    contador++;
} while (contador <= 0); 


const codigoPromocional = 10;
let desconto = 0;

switch (codigoPromocional) {
    case 10:
        console.log("Produto tenis");
        desconto = "5%"
        break;
    case 510:
        console.log("Produto calça");
        desconto = "10%"
        break;
    default:
        console.log("Produto não encontrado");
        break;
}

console.log(`O valor do desconto é de ${desconto}`);