const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliação1 = 9.234
const avaliação2 = 6.234

const total = avaliação1 * peso1 + avaliação2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) //tofixed aprensenta os dois números depois da virgula(apenas),  tostring(transforma em binario)
console.log(typeof media)