// --- DADOS DE ENTRADA DO SISTEMA ---

const idade = 20;
const temPermissao = true;
const saldo = 0;
const nomeCompleto = "Mariana Silva";
const senha = "123";


// --- 1. VALIDAÇÕES BOOLEANAS EXPLÍCITAS ---

// Verificação de idade mínima (21 anos)
let ehMaiorDeIdade = idade >= 21;

// Verificação de senha forte (mais de 6 caracteres)
let senhaEhValida = senha.length > 6;

// Verificação de acesso
let acessoPermitido = ehMaiorDeIdade && temPermissao;

console.log("--- 1. Resultados de Validação Explícita ---");
console.log(`É maior de 21 anos? ${ehMaiorDeIdade}`);
console.log(`A senha é válida? ${senhaEhValida}`);
console.log(`Acesso concedido? ${acessoPermitido}`);


// --- 2. VALORES TRUTHY E FALSY (Conversão Implícita) ---

console.log("\n--- 2. Comportamento Truthy (Verdadeiro) ---");

// Qualquer número diferente de zero é Truthy
let verificaIdade = Boolean(idade);
console.log(`O número ${idade} é Truthy? ${verificaIdade}`);

// Qualquer string não vazia é Truthy
let verificaNome = Boolean(nomeCompleto);
console.log(`A string "${nomeCompleto}" é Truthy? ${verificaNome}`);


console.log("\n--- 3. Comportamento Falsy (Falso) ---");

// O número zero é Falsy
let verificaSaldoZero = Boolean(saldo);
console.log(`O número ${saldo} (saldo) é Falsy? ${verificaSaldoZero}`);

// String vazia é Falsy
let stringVazia = "";
let verificaVazio = Boolean(stringVazia);
console.log(`A string vazia ("") é Falsy? ${verificaVazio}`);

// O valor 'null' é Falsy
let variavelNula = null;
let verificaNulo = Boolean(variavelNula);
console.log(`O valor null é Falsy? ${verificaNulo}`);