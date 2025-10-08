// --- 1. ENTRADA DE DADOS ---

// Defina quantos números da sequência você deseja (N)
const nTermos = 10;

// O array sempre começa com 0 e 1 (se N for maior que 1)
const sequencia = [0, 1];


// --- 2. GERAÇÃO DA SEQUÊNCIA (LOOP) ---

// Se N for 1, a sequência é só [0]. Se for 0, é [].
if (nTermos === 0) {
    sequencia.length = 0; // Limpa o array
} else if (nTermos === 1) {
    sequencia.length = 1; // Mantém apenas o 0
} else {
    // O loop começa no índice 2, pois 0 e 1 já estão no array
    for (let i = 2; i < nTermos; i++) {
        // Pega o número anterior (sequencia[i-1])
        const anterior = sequencia[i - 1];
        
        // Pega o número ante-anterior (sequencia[i-2])
        const anteAnterior = sequencia[i - 2];
        
        // O próximo termo é a soma dos dois anteriores
        const novoTermo = anterior + anteAnterior;
        
        // Adiciona o novo termo ao final do array
        sequencia.push(novoTermo);
    }
}


// --- 3. EXIBIÇÃO DO RESULTADO ---

console.log("--- GERADOR DE SEQUÊNCIA DE FIBONACCI ---");
console.log(`N (Termos Solicitados): ${nTermos}`);

console.log("\nSequência Gerada:");
console.log(sequencia.join(', '));