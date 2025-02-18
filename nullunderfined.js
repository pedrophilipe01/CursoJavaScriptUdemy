let valor//não iniciada
console.log(valor)

valor = null //ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco se eu quissese tirar o undefined
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)

// o certo é usar o nulo(null)