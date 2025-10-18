// --- 1. FUNÇÃO PRINCIPAL: VALIDAÇÃO DE PALÍNDROMO ---

function ehPalindromo(texto) {
    // 1. Limpeza e Padronização
    // Remove todos os caracteres que não sejam letras (incluindo espaços e pontuação)
    // Converte toda a string para minúsculas
    const textoLimpo = texto.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // 2. Criação da String Reversa
    // .split('') transforma a string em um array de caracteres
    // .reverse() inverte a ordem dos elementos no array
    // .join('') junta os elementos do array de volta em uma string
    const textoReverso = textoLimpo.split('').reverse().join('');

    // 3. Comparação Final
    // Retorna true se a string limpa for igual à string reversa
    return textoLimpo === textoReverso;
}


// --- 2. TESTES E EXEMPLOS DE USO ---

console.log("--- VERIFICADOR DE PALÍNDROMO ---");

// Testes Simples
console.log(`"ana" é palíndromo? ${ehPalindromo("ana")}`);
console.log(`"radar" é palíndromo? ${ehPalindromo("radar")}`);
console.log(`"javascript" é palíndromo? ${ehPalindromo("javascript")}`);

// Teste com frase complexa
const fraseTeste = "A man a plan a canal Panama";
console.log(`\n"${fraseTeste}" é palíndromo? ${ehPalindromo(fraseTeste)}`);

// Outro exemplo complexo
const fraseTeste2 = "Roma me tem amor";
console.log(`"${fraseTeste2}" é palíndromo? ${ehPalindromo(fraseTeste2)}`);