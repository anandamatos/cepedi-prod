// --- 1. ENTRADA DE DADOS (Comprimento dos Lados) ---

const ladoA = 6;
const ladoB = 6;
const ladoC = 6;

let tipoTriangulo = "";


// --- 2. VALIDAÇÃO PRINCIPAL (Pode Formar um Triângulo?) ---

// Regra do Triângulo: A soma de dois lados deve ser SEMPRE maior que o terceiro lado.
if (
    ladoA + ladoB > ladoC &&
    ladoA + ladoC > ladoB &&
    ladoB + ladoC > ladoA
) {
    // Se a condição principal for verdadeira, classificamos o triângulo

    // Condição 2.1: Equilátero (Todos os lados iguais)
    if (ladoA === ladoB && ladoB === ladoC) {
        tipoTriangulo = "EQUILÁTERO (Todos os lados iguais)";
        
    } 
    // Condição 2.2: Isósceles (Apenas dois lados iguais)
    else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        tipoTriangulo = "ISÓSCELES (Apenas dois lados iguais)";
        
    } 
    // Condição 2.3: Escaleno (Todos os lados diferentes)
    else {
        tipoTriangulo = "ESCALENO (Todos os lados diferentes)";
    }

} else {
    // Se a condição principal for falsa, não é um triângulo
    tipoTriangulo = "NÃO É UM TRIÂNGULO (A soma de dois lados é menor ou igual ao terceiro)";
}


// --- RESULTADO FINAL ---

console.log("--- CLASSIFICAÇÃO DE TRIÂNGULO ---");
console.log(`Lados: A=${ladoA}, B=${ladoB}, C=${ladoC}`);
console.log(`Resultado: ${tipoTriangulo}`);