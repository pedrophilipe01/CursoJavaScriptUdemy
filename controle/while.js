function getInteiroAaleatorioEntre (min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1) {
    opcao = getInteiroAaleatorioEntre(-1, 10)
    console.log(`A opcção escolhida foi: ${opcao}.`)
    
} //laço de repetição 

console.log('Programa terminado!')