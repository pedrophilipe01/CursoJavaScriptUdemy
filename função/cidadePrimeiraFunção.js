//criar de forma literal
function ParImpar(){

}

//criar de forma variável
const ImparPar = function(){

}

//armazenar em uma array
const array = [function (a, b) { return a + b }, ParImpar, ImparPar]
console.log(array[0](2, 3))

//armazenar em um atributo de objeto
const obj = {}
    obj.falar = function () { return 'opa'}
    console.log(obj.falar())

//passar função com param
function run(fun) {
    fun()
}

run(function ( ){console.log('executando...')})

//uma função pode retornar/conter uma função
function soma(a, b){
    return  function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)