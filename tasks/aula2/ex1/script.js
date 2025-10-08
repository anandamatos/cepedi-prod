const depositoInicial = 500.00;
const taxaRendimento = 0.01;
const depositoMes2 = 200.00;
const retiradaMes3 = 50.00;

let saldoAtual = depositoInicial;

saldoAtual = saldoAtual * (1 + taxaRendimento);
saldoAtual = saldoAtual + depositoMes2;
saldoAtual = saldoAtual * (1 + taxaRendimento);
saldoAtual = saldoAtual - retiradaMes3;
saldoAtual = saldoAtual * (1 + taxaRendimento);

console.log("O saldo que deu no final do 4º mês será:");
console.log("R$ " + saldoAtual.toFixed(2));