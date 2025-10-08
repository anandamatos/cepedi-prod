// --- 1 & 2. FUNÇÕES BÁSICAS DE OPERAÇÃO ---

// Função de Adição
function somar(a, b) {
    return a + b;
}

// Função de Subtração
function subtrair(a, b) {
    return a - b;
}

// Função de Multiplicação
function multiplicar(a, b) {
    return a * b;
}

// Função de Divisão
function dividir(a, b) {
    // Adiciona uma pequena validação para evitar divisão por zero
    if (b === 0) {
        return "Erro: Divisão por zero";
    }
    return a / b;
}


// --- 3 & 4. FUNÇÃO MESTRA (CONTROLADORA) ---

function calcular(num1, num2, operacao) {
    // A estrutura switch é perfeita para escolher entre várias opções de string
    switch (operacao.toLowerCase()) {
        case "somar":
            return somar(num1, num2);
        case "subtrair":
            return subtrair(num1, num2);
        case "multiplicar":
            return multiplicar(num1, num2);
        case "dividir":
            return dividir(num1, num2);
        default:
            return "Erro: Operação inválida";
    }
}


// --- TESTES E EXEMPLO DE USO ---

console.log("--- TESTES DA CALCULADORA ---");
console.log(`5 + 3 = ${calcular(5, 3, "somar")}`);
console.log(`5 - 3 = ${calcular(5, 3, "subtrair")}`);
console.log(`5 x 3 = ${calcular(5, 3, "multiplicar")}`);
console.log(`6 / 3 = ${calcular(6, 3, "dividir")}`);
console.log(`10 / 0 = ${calcular(10, 0, "dividir")}`);
console.log(`5 ? 3 = ${calcular(5, 3, "potencia")}`);