// --- 1. FUNÇÃO DE VALIDAÇÃO ---

function ehPrimo(numero) {
    // Regra 1: Números menores ou iguais a 1 não são primos.
    if (numero <= 1) {
        return false;
    }
    
    // Regra 2: O loop começa a checar a partir de 2, pois todo número é divisível por 1.
    // O loop continua até a raiz quadrada do número (otimização). 
    // Para simplificar, vamos até o número - 1, como um estudante faria no início.
    for (let i = 2; i < numero; i++) {
        // Se o resto da divisão for 0, encontramos um divisor, então NÃO é primo.
        if (numero % i === 0) {
            return false;
        }
    }
    
    // Se o loop terminou sem encontrar nenhum divisor, o número É primo.
    return true;
}


// --- 2. TESTES DE NÚMEROS ---

const num1 = 17; // Primo
const num2 = 12; // Não primo
const num3 = 7;  // Primo
const num4 = 1;  // Não primo


// --- 3. RESULTADO FINAL ---

console.log("--- VALIDADOR DE NÚMEROS PRIMOS ---");
console.log(`O número ${num1} é primo? ${ehPrimo(num1)}`);
console.log(`O número ${num2} é primo? ${ehPrimo(num2)}`);
console.log(`O número ${num3} é primo? ${ehPrimo(num3)}`);
console.log(`O número ${num4} é primo? ${ehPrimo(num4)}`);