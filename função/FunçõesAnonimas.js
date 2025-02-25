const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(10, 4)
imprimirResultado(10, 5)
imprimirResultado(13, 3, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function(){
        console.log("Olá")
    }
}

pessoa.falar()