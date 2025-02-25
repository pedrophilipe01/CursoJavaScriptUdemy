const pessoa = {
    nome: "Pedro",
    dizerNome: function(){
        console.log(this.nome);
    }
};

pessoa.dizerNome();

//O valor de this muda dependendo de como e onde a função é chamada.
