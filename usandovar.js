{
    {
        {
            var sera = 'Será???'
            console.log(sera) 
        }
    }
}
console.log(sera)

function teste() { 
    var local = 123 //não é possivel acessar a variavel fora da função(apenas dentro)
    console.log(local)
}

//teste()
//console.log(local)//fora do escopo não funciona 

//escopo: local onde a variavel é visivel

var cu = "predro"
console.log(cu)

function teste(){
    var pedro = 123
    console.log(pedro)
}