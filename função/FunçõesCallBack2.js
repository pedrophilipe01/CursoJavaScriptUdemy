const notas = [7.7, 7.6, 6.6, 4.6, 8.8, 9.5, 3.5, 5.5]
//sem callback 
let notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i]) 
        //push para add um elemento no array
    } 
}

console.log(notasBaixas1)

//com callBack 1° forma
const notasBaixas2 = notas.filter(function(nota){
    return nota <= 7
})

console.log(notasBaixas2)

//com CallBack 2° forma
const notasbaixas3 = notas.filter(nota => nota < 7)
console.log(notasbaixas3)


//função que vai filtrar os elementos de uma array encima de um determinado critério que vai ser uma função callback que retorna true ou false