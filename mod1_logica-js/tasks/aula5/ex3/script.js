// --- 1, 2 e 3. FUNÇÕES BÁSICAS DE CONVERSÃO ---

// 1. Celsius (C) para Fahrenheit (F)
function celsiusParaFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

// 2. Fahrenheit (F) para Celsius (C)
function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// 3. Celsius (C) para Kelvin (K)
function celsiusParaKelvin(celsius) {
    return celsius + 273.15;
}


// --- 4. FUNÇÃO MESTRA (CONTROLADORA) ---

function converterTemperatura(temperatura, escalaAtual, escalaDesejada) {
    const atual = escalaAtual.toUpperCase();
    const desejada = escalaDesejada.toUpperCase();
    
    // 1. Caso base: se as escalas forem iguais, retorna a temperatura original
    if (atual === desejada) {
        return temperatura;
    }
    
    let resultado;

    // A estrutura switch/case é a forma mais limpa de lidar com múltiplas conversões
    switch (`${atual}-${desejada}`) {
        case "C-F":
            resultado = celsiusParaFahrenheit(temperatura);
            break;
        case "F-C":
            resultado = fahrenheitParaCelsius(temperatura);
            break;
        case "C-K":
            resultado = celsiusParaKelvin(temperatura);
            break;
            
        // Casos Inversos (de K e F, convertendo primeiro para C para reutilizar as funções)
        case "F-K":
            // F -> C -> K
            const tempC_F = fahrenheitParaCelsius(temperatura);
            resultado = celsiusParaKelvin(tempC_F);
            break;
        case "K-C":
            // K -> C
            resultado = temperatura - 273.15;
            break;
        case "K-F":
            // K -> C -> F
            const tempC_K = temperatura - 273.15;
            resultado = celsiusParaFahrenheit(tempC_K);
            break;

        default:
            return "Erro: Escalas de temperatura inválidas";
    }

    return parseFloat(resultado.toFixed(2));
}


// --- TESTES E EXEMPLOS DE USO ---

console.log("--- CONVERSOR DE TEMPERATURA ---");
// Exemplos do enunciado:
console.log(`25°C para °F: ${converterTemperatura(25, "C", "F")}`);    // 77
console.log(`98.6°F para °C: ${converterTemperatura(98.6, "F", "C")}`); // 37
console.log(`25°C para °K: ${converterTemperatura(25, "C", "K")}`);    // 298.15

// Testes Adicionais:
console.log(`\n77°F para °K: ${converterTemperatura(77, "F", "K")}`);      // 298.15
console.log(`300°K para °C: ${converterTemperatura(300, "K", "C")}`);      // 26.85
console.log(`300°K para °F: ${converterTemperatura(300, "K", "F")}`);      // 80.33