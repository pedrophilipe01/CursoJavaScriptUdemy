function getInteiroAaleatorioEntre(min, max){
    const valor = Math.random() * (max - min) +  min
    return Math.floor(valor)
}

let opcao 

do {
    opcao = getInteiroAaleatorioEntre(-1, 10)
    console.log(`a opcao escolhida foi: ${opcao}.`)
} while (opcao != -1)

    console.log('até a próxima')