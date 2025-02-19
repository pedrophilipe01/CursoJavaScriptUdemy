//par nome/valor
const saudacao = 'opa' // contexto léxico 1 

function exec() {
    const saudacao = 'falaaaaa' //contexto léxico 2
    return saudacao 

}

//objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome:'Pedro',
    Idade: 18,
    peso:60,
    endereço:{
        logradouro:'Quadra 14 conjunto 7 casa 5',
        numero: 5
    }
}


console.log(saudacao)
console.log(exec())
console.log(cliente)
