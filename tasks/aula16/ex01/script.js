/*

*/
// criar duas classes pessoas
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e minha idade é ${this.idade} `);
    }
}

// Criação da primeira instância
let p1 = new Pessoa("Ana", 30);
p1.apresentar();
let p2 = new Pessoa("Bia", 40);
p2.apresentar();