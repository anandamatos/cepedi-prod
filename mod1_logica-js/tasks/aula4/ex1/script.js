// --- 1. PLACAR DO JOGO (LET) ---

let vitorias = 0;
let derrotas = 0;
let empates = 0;


// --- 2. OPÇÕES DO JOGO (CONST ARRAY) ---

const opcoes = ["pedra", "papel", "tesoura"];


// --- 3. FUNÇÃO PRINCIPAL: SIMULAR JOGADA ---

function jogar() {
    // a) Simulação da escolha do usuário (para facilitar, vamos fixar uma)
    const escolhaUsuario = "papel"; 

    // b) Escolha aleatória do computador
    // Math.random() gera um número entre 0 e 1. Multiplicamos por 3 (número de opções)
    // Math.floor() arredonda para o inteiro mais próximo (0, 1 ou 2)
    const indiceComputador = Math.floor(Math.random() * 3);
    const escolhaComputador = opcoes[indiceComputador];
    
    let resultado = "";

    console.log(`\nVocê escolheu: ${escolhaUsuario}`);
    console.log(`Computador escolheu: ${escolhaComputador}`);

    // c) Lógica do Jogo (Condicionais aninhadas)
    
    // EMPATE
    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate!";
        empates++;
    } 
    // VITÓRIA
    else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
        resultado = "Você VENCEU!";
        vitorias++;
    } 
    // DERROTA (qualquer outro caso)
    else {
        resultado = "Você PERDEU!";
        derrotas++;
    }

    console.log(`Resultado: ${resultado}`);
}


// --- 4. EXECUÇÃO DO JOGO E EXIBIÇÃO DO PLACAR ---

// Simular 5 rodadas
console.log("--- INÍCIO DO JOGO: PEDRA, PAPEL, TESOURA ---");

// Loop para repetir o jogo
for (let rodada = 1; rodada <= 5; rodada++) {
    console.log(`\n*** Rodada ${rodada} ***`);
    jogar();
}

console.log("\n=========================");
console.log("     PLACAR FINAL        ");
console.log("=========================");
console.log(`Vitórias: ${vitorias}`);
console.log(`Derrotas: ${derrotas}`);
console.log(`Empates: ${empates}`);
console.log("=========================");