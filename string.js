const escola = "cod3r"

console.log(escola.charAt(3))//mostra a letra de qual indice eu quiser
console.log(escola.charAt(5))//mostrando um indice que não existe
console.log(escola.charCodeAt(3))//tabela ascii
console.log(escola.indexOf('3'))//Se '4' estiver presente na string escola, indexOf retornará o índice da primeira ocorrência da substring '4'.

console.log(escola.substring(1))//tira o indice 1
console.log(escola.substring(0,3))//mostra do indice 0 ao 3

console.log('Pedrin estuda na '.concat(escola).concat('!'))//concatenar concat/pode usar o de símbolo de soma
console.log(escola.replace(3, 'e'))//substituir digitos por letras

console.log('pedro, taina, vitor'.split('/'))//converter para array  


let a = 3
let b = 1

console.log(a-b)