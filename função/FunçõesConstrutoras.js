function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado (pertence apenas ao escopo da função carro)
    let velocidadeAtual = 0

    //méstodo público
    this.acelerar = function () {

        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }


    //método público
    this.getvelocidadeAtual = function () {
        return velocidadeAtual
    }

}
const uno = new Carro
uno.acelerar()
console.log(uno.getvelocidadeAtual()) 

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())