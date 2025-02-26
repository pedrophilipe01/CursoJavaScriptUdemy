const pessoa = {
    nome: "Pedro",
    falar: function () {
        console.log("Meu nome é ", this.nome)
    }
};

const falarFunc = pessoa.falar;
falarFunc()

const falarCorreto = pessoa.falar.bind(pessoa)
falarCorreto();  