// --- CREDENCIAIS DE ENTRADA (As que o usuário digitou) ---

// Mude estes valores para testar os diferentes resultados!
const usuarioDigitado = "admin";
const senhaDigitada = "123456";


// --- CREDENCIAIS E REGRAS DO SISTEMA (Valores Fixos) ---

const usuarioAdmin = "admin";
const senhaAdmin = "123456";
const usuarioComum = "usuario123";
const senhaComum = "senhaforte";

// --- VERIFICAÇÃO COM IF / ELSE IF / ELSE ---

let mensagemAcesso = "";

// 1. PRIMEIRA VERIFICAÇÃO: Acesso de Administrador
// (Precisa ser: Usuário Admin E Senha Admin)
if (usuarioDigitado === usuarioAdmin && senhaDigitada === senhaAdmin) {
    mensagemAcesso = "Acesso de administrador";

} 
// 2. SEGUNDA VERIFICAÇÃO: Acesso de Usuário Comum
// (Precisa ser: Usuário Comum E Senha Comum)
else if (usuarioDigitado === usuarioComum && senhaDigitada === senhaComum) {
    mensagemAcesso = "Acesso de usuário";

} 
// 3. TERCEIRA VERIFICAÇÃO: Acesso Negado
// (Se não for nenhuma das condições acima)
else {
    mensagemAcesso = "Acesso negado";
}


// --- RESULTADO FINAL ---

console.log("--- RESULTADO DO LOGIN ---");
console.log(`Usuário: ${usuarioDigitado}`);
console.log(`Senha: ${senhaDigitada}`);
console.log(`Status: ${mensagemAcesso}`);