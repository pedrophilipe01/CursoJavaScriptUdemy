const valores = [7.7, 7.6, 7.4, 8.7]//array(vetores)
console.log(valores[0],  valores[3])//mostrar o valor 0 e 3
console.log(valores[4])//pedi para imprimir o valor 4, mas não existia, logo criei embaixo... (valor indefinido)

valores[4] = 10 //passou a ter o elemento de indice 4
console.log(valores)
console.log(valores.length)//quantos elementos tem o array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())//excluir um elemento de uma array(vai imprimir na tela), vai excluir o último elemento
delete valores[0]// tira o valor da array
console.log(valores)

console.log(typeof valores)



const nota = [2.2, 3.4, 5.5]
console.log(nota)