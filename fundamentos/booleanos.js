let isAtivo = false
console.log(isAtivo); //literal falso

isAtivo = true
console.log(isAtivo) //literal verdadeiro

isAtivo = 1
console.log(!!isAtivo) //verdadeiro !!negação duas vezes é true ! é falso

console.log("\n")//pular linha

console.log('os verdadeiros...\n')
console.log(!!5.2)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity))
console.log(!![])
console.log(!![])
console.log(!![])

console.log("\n")

console.log("os falsos...\n")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("\n")

console.log('pra finalizar')

console.log("\n")

console.log(!! ( "|| null || 0 || ")) 

let nome = ''
console.log(nome || 'desconhecido')//se não tiver um nome, ele irá imprimir o segundo valor, que é desconhecido(se não imprimir um, imprime outro) 