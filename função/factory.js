//factory é uma função que retorna um objeto
//factory simples:
function CriarPessoa() {
    return{
        nome: 'Pedro',
        sobrenome: 'Costa',
    }
}

console.log(CriarPessoa())