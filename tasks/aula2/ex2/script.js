const nomeUsuario = "Pedro Oliveira";
const emailUsuario = "pedro.oliveira@tech.com";

let idadeUsuario = 18;
let statusAtivo = true;
let numeroLogins = 1;

console.log("--- Cadastro Inicial do Usuário ---");
console.log(`Nome: ${nomeUsuario}`);
console.log(`Idade: ${idadeUsuario}`);
console.log(`E-mail: ${emailUsuario}`);
console.log(`Status Ativo: ${statusAtivo}`);
console.log(`Logins: ${numeroLogins}`);

console.log("\n--- Atualização de Dados (Variáveis LET) ---");

// 1. A idade do usuário é atualizada após um ano
idadeUsuario = numeroLogins + 1;
console.log(`Idade ATUALIZADA: ${idadeUsuario}`);

// 2. O usuário faz um novo login (o contador é incrementado)
numeroLogins = numeroLogins + 1;
console.log(`Logins INCREMENTADO: ${numeroLogins}`);

// 3. O usuário decide desativar sua conta
statusAtivo = false;
console.log(`Status ATUALIZADO: ${statusAtivo}`);

// TENTATIVA DE MUDAR UMA CONST (Causaria um erro de execução):
// nomeUsuario = "Novo Nome";