console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

const Obj2 = {
    nome: 'cadeira',
    // outras propriedades, se houver
};
const Obj3 = {
    nome: 'mesa',
    // outras propriedades, se houver
};

function Obj(nome){
    this.nome = nome //nome associado a esse objeto que foi criado a partir da função
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')

console.log(Obj2.nome)
console.log(Obj3.nome)
obj3.exec()
