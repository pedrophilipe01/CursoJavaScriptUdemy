function CriarProduto(nome, preço) {
    return {
        nome,
        preço,
        desconto: 0.1
    }
}

console.log(CriarProduto('notebook', 2199.29))
console.log(CriarProduto('ipad', 2199.29))
