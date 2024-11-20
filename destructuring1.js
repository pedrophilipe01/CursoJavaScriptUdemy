const pessoa = {
    nome:'Pedro',
    idade:"18 anos",
    escolaridade:'cursando ensino superior',
    endereco: {
        logradouro: 'quadra 14 conjunto 7 casa 5', 
        numero:5
    }
    
}

const {nome, idade} = pessoa 
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n,i)

const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const{endereco: {logradouro, numero, cep} }=pessoa
console.log(logradouro, numero, cep)