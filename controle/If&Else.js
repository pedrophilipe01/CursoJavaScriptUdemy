const imprimirResultado = function(nota){
    if (nota >= 7) {
        console.log('aprovado')   
    } else{
        console.log('reprovado')
    }   
}

imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(5.5)
imprimirResultado(7.5)
imprimirResultado('epa!')//cuidado


