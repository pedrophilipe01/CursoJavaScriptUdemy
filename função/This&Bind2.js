function pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new pessoa
//setInterva despara outra função a partir de outro intervalo que vc passou, pode passar um parametro para outra função
