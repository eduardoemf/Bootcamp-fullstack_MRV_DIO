function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
};

const pessoa1 = {
    nome: "Eduardo",
    idade: 28
};

const pessoa2 = {
    nome: "Bianca",
    idade: 25
};

const animal = {
    nome: 'Scoob',
    idade: 5,
    raca: 'vira-lata'
};

console.log(calculaIdade.call(pessoa1, 30))
console.log(calculaIdade.apply(pessoa2, [40]))