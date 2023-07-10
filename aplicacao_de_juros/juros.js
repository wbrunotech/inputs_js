import entradaDados from "readline-sync";

console.log("Aplicação de Juros\n");

let valorDivida = entradaDados.question("Informe o valor devido: ");
let juros;

if (valorDivida > 0) {
    let diasAtraso = entradaDados.question("\nInforme quantos dias se passaram desde o vencimento do boleto: ");
    if (diasAtraso > 0) {
        if (diasAtraso > 15) {
            juros = 10.00;
        }
        else {
            juros = 5.00;
        }

        valorDivida = Number(valorDivida);
        diasAtraso = Number(diasAtraso);

        let totalJuros = Number(valorDivida / 100) * Number(juros);
        let valorTotal = Number(valorDivida) + Number(totalJuros);

        console.log("\nValor original da dívida: R$ " + valorDivida);
        console.log("Dias atrasados: " + diasAtraso);
        console.log("Você pagará de Juros R$: " + totalJuros + "");
        console.log("Valor total com juros: R$ " + valorTotal.toFixed(2));
    }
    else {
        console.log("Você está em dia!");
    }
}
else {
    console.log("O valor da dívida deve ser maior que zero!")
}