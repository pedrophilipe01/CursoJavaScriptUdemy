function soBoaNoticia(nota){
    if(nota >=7){
        console.log('aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)


function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('é verdade...' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)

