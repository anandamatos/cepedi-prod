// --- CREDENCIAIS E REGRAS DO SISTEMA ---

const usuarioCadastrado = "admin";
const senhaCadastrada = "senha123";
const nivelDeAcesso = "moderador";

// Dados de entrada para o Login
const usuarioTentativa = "admin";
const senhaTentativa = "senha123";

// Regras para acesso premium
const temAssinatura = false;
const saldoPremium = 50;


// --- 1. AUTENTICAÇÃO BÁSICA (Operador E: &&) ---

// O acesso só é verdadeiro SE o usuário for E a senha for correta
let credenciaisCorretas = (usuarioTentativa === usuarioCadastrado) && (senhaTentativa === senhaCadastrada);

console.log("--- 1. Autenticação de Login (E: &&) ---");
console.log(`Credenciais corretas? ${credenciaisCorretas}`);

if (credenciaisCorretas) {
    console.log("LOGIN BEM-SUCEDIDO: Bem-vindo ao sistema!");
} else {
    console.log("FALHA DE LOGIN: Usuário ou senha incorretos.");
}


// --- 2. VERIFICAÇÃO DE ACESSO (Operador OU: ||) ---

// Acesso permitido se for 'admin' OU 'moderador'
const ehAdministrador = nivelDeAcesso === "admin";
const ehModerador = nivelDeAcesso === "moderador";

let acessoTotalPermitido = ehAdministrador || ehModerador;

console.log("\n--- 2. Regras de Acesso (OU: ||) ---");
console.log(`Acesso Total permitido? ${acessoTotalPermitido}`);


// --- 3. OPERADOR NÃO (!) E COMBINAÇÃO ---

// Acesso Premium concedido SE (tiver assinatura OU saldo suficiente) E NÃO estiver suspenso
const contaSuspensa = false;
const acessoPremium = (temAssinatura || saldoPremium > 100) && !contaSuspensa;

console.log("\n--- 3. Combinação de Operadores (E/OU/NÃO) ---");
console.log(`Acesso Premium (Condição Complexa): ${acessoPremium}`);