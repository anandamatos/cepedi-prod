// Dados de entrada do produto (usando const, pois são fixos)

const nomeProduto = "caneca de café";
const precoBruto = 29.99;
const quantidadeEstoque = 15;
const fornecedor = "COPOFACIL Ltda";


// --- 1. CONCATENAÇÃO TRADICIONAL (Operador +) ---

let mensagemConcatenacao = "O produto " + nomeProduto.toUpperCase() + " está disponível em estoque com " + quantidadeEstoque + " unidades. O preço é R$ " + precoBruto.toFixed(2) + ".";

console.log("--- 1. Concatenação Tradicional ---");
console.log(mensagemConcatenacao);


// --- 2. TEMPLATE LITERALS (Interpolação de String) ---

let mensagemTemplate = `
--- Relatório de Produto ---
Nome: ${nomeProduto.charAt(0).toUpperCase() + nomeProduto.slice(1)}
Preço (R$): ${precoBruto.toFixed(2)}
Estoque: ${quantidadeEstoque}
Fornecedor: ${fornecedor.toLowerCase()}
`;

console.log("\n--- 2. Template Literals (Formato Bloco) ---");
console.log(mensagemTemplate);


// --- 3. APLICAÇÃO DE MÉTODOS DE STRING PARA FORMATAÇÃO ---

const fraseOriginal = "a melhor hora para programar é agora";
const fraseFormatada = fraseOriginal.slice(2).trim();
const fraseMaiuscula = fraseOriginal.toUpperCase();
const fraseMinuscula = fraseOriginal.toLowerCase();

console.log("\n--- 3. Métodos de String ---");
console.log("Original: " + fraseOriginal);
console.log("Com slice(2) e trim(): " + fraseFormatada);
console.log("Em Maiúsculas: " + fraseMaiuscula);
console.log("Em Minúsculas: " + fraseMinuscula);