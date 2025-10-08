// --- 1. ENTRADA DE DADOS (Notas do Aluno) ---

const nota1 = 7.5;
const nota2 = 6.0;
const nota3 = 8.5;

const numeroDeNotas = 3;


// --- 2. CÁLCULO DA MÉDIA ---

let somaDasNotas = nota1 + nota2 + nota3;
let mediaFinal = somaDasNotas / numeroDeNotas;

console.log("--- RESULTADOS ---");
console.log(`Nota 1: ${nota1}`);
console.log(`Nota 2: ${nota2}`);
console.log(`Nota 3: ${nota3}`);
console.log(`Média Final: ${mediaFinal.toFixed(2)}`);


// --- 3. ESTRUTURA CONDICIONAL (IF/ELSE IF/ELSE) ---

let situacaoDoAluno = "";

if (mediaFinal >= 7) {
    // Condição 1: Aprovado
    situacaoDoAluno = "APROVADO";
    
} else if (mediaFinal >= 5 && mediaFinal < 7) {
    // Condição 2: Em Recuperação (entre 5.0 e 6.9)
    situacaoDoAluno = "EM RECUPERAÇÃO";
    
} else {
    // Condição 3: Reprovado (se não for nenhuma das anteriores, é menor que 5)
    situacaoDoAluno = "REPROVADO";
}

console.log(`Situação: ${situacaoDoAluno}`);