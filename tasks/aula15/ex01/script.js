/*let objectABC = {
    A = "Azul"
    B = "Banco"
    C = "Calota"
};


1, considerando um objeto carro
a.altera a cor do carro para vermelho
b.add mais um propriedade chamadado ano com valor 2022
c. mostre o objeto atualizado no console

2.crie um objeto chamado lugar com as propriedades nome, idade, e cidade, mostre no console uma frase como "point barreiro tem 14 anos e fica e em belo horizonte" 


let carro = {
    tipo: "FIAT",
    modelo: "500",
    cor: "branco"
};

carro.cor = "vermelho";
carro.ano = 2022;
console.log(carro);


// 2. Cria o objeto chamado lugar com as propriedades nome, idade e cidade
let lugar = {
    nome: "point barreiro",
    idade: 14,
    cidade: "belo horizonte"
};

let frase = `${lugar.nome} tem ${lugar.idade} anos e fica em ${lugar.cidade}.`;

console.log(frase);


3.usando for ...in mostre na tela as chaves e valores no formato chave => alor com a saida esperada
a =>10 assim por diante 


let objectABC = {
    A: 10,
    B: 21,
    C: -5
};

// Usando for...in para iterar sobre o objeto
for (let chave in objectABC) {
    // A variável 'chave' contém o nome da propriedade (ex: "A", "B", "C")
    // Para acessar o valor, usamos objectABC[chave] (ex: 10, 21, 5)
    console.log(`${chave} => ${objectABC[chave]}`);
}

let cachorro = {
    nome = "",
    cor = "",
    latir: function(){
        return "AU au"
        nomeCor: function(){ return this.name + "é " +this.cor}
    };
}
*/

let cachorro = {
    nome: "Rex", 
    cor: "preto",
    latir: function(){
        return "AU au";
    },
    nomeCor: function(){
        return this.nome + " é " + this.cor;
    }
};

console.log(cachorro.latir());
console.log(cachorro.nomeCor());