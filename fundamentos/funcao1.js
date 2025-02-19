//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2 , 3)//imprimrir valor na tela com função

//funcao com retorno
function soma(a = 6, b = 1){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())