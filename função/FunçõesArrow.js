let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implícito
console.log(dobro(Math.PI))

let Ola = function (){
    return 'Olá'
}

Ola = () => 'Olá'
Ola = _ => 'Olá' //possui um param
console.log(Ola())