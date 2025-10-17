// --- DADOS PARA COMPARAÇÃO ---

const numeroA = 10;
const textoB = "10";
const booleanoC = true;
const numeroD = 1;

console.log("--- 1. IGUALDADE SOLTA (==) ---");

// 1.1. Comparação de valor (Número vs. Texto)
let resultado1 = numeroA == textoB;
console.log(`10 == "10" (Número vs. String): ${resultado1}`);

// 1.2. Comparação de valor com conversão (Booleano vs. Número)
let resultado2 = booleanoC == numeroD;
console.log(`true == 1 (Booleano vs. Número): ${resultado2}`);

// 1.3. Comparação de valores diferentes, mas tipos diferentes
let resultado3 = 0 == false;
console.log(`0 == false (Falsy vs. Booleano): ${resultado3}`);


console.log("\n--- 2. IGUALDADE RESTRITA (===) ---");

// 2.1. Comparação de valor E tipo (Número vs. Texto)
let resultado4 = numeroA === textoB;
console.log(`10 === "10" (Número vs. String): ${resultado4}`);

// 2.2. Comparação de valor E tipo (Booleano vs. Número)
let resultado5 = booleanoC === numeroD;
console.log(`true === 1 (Booleano vs. Número): ${resultado5}`);

// 2.3. Comparação de valores iguais E tipos iguais
let resultado6 = numeroA === 10;
console.log(`10 === 10 (Número vs. Número): ${resultado6}`);


console.log("\n--- 3. OUTROS OPERADORES RELACIONAIS ---");

let maiorQue = numeroA > 5;
console.log(`10 > 5? ${maiorQue}`);

let diferenteSolto = numeroA != textoB;
console.log(`10 != "10" (Solto)? ${diferenteSolto}`);

let diferenteRestrito = numeroA !== textoB;
console.log(`10 !== "10" (Restrito)? ${diferenteRestrito}`);