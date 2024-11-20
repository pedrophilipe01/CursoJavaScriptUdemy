const nome = 'pedro'
const concatenação = 'olá ' + nome + '!'
const template = `
Olá 
${nome}!`
console.log(concatenação, template)

//expressoes :
console.log(`1+1 = ${1+1}`)

const up = texto => texto.toUpperCase()//letra maiuscula
console.log(`Ei... ${up(`cuidado`)}`)// Ela permite incluir expressões dentro de uma string. Tudo o que está dentro de ${} será avaliado e inserido na string resultante.