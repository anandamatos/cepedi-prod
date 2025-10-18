// --- 1. CÁLCULO DA ÁREA DO RETÂNGULO ---

const largura = 10;
const altura = 5;

let areaRetangulo = largura * altura;

console.log("--- 1. Área do Retângulo ---");
console.log("Largura: " + largura);
console.log("Altura: " + altura);
console.log("Área (L x A): " + areaRetangulo);


// --- 2. CÁLCULO DO PERÍMETRO DO CÍRCULO (CIRCUNFERÊNCIA) ---

const pi = 3.14159;
const raio = 8;

let perimetroCirculo = 2 * pi * raio;

console.log("\n--- 2. Perímetro do Círculo ---");
console.log("Raio: " + raio);
console.log("Perímetro (2 * π * raio): " + perimetroCirculo.toFixed(2));


// --- 3. CÁLCULO DA MÉDIA DE TRÊS NÚMEROS ---

const n1 = 70;
const n2 = 85;
const n3 = 90;

let somaNumeros = n1 + n2 + n3;
let mediaNumeros = somaNumeros / 3;

console.log("\n--- 3. Média de Três Números ---");
console.log("Números: " + n1 + ", " + n2 + ", " + n3);
console.log("Média: " + mediaNumeros.toFixed(2));


// --- BÔNUS: COMPORTAMENTO DE NaN e Infinity ---

console.log("\n--- 💡 BÔNUS: NaN e Infinity ---");

// Tentativa de divisão por zero (resultado impossível)
let resultadoInfinito = 10 / 0;
console.log("Divisão por Zero (10 / 0): " + resultadoInfinito);

// Tentativa de operação matemática com algo que não é número (resultado inválido)
let resultadoInvalido = 5 * "gato";
console.log("Operação Inválida (5 * 'gato'): " + resultadoInvalido);