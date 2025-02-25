let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global)

const pedro = {}
    comparaComThis = comparaComThis.bind(pedro)
    comparaComThis(global)
    comparaComThis(pedro)
    
    let comparaComThisArrow = param => console.log(this === param)
    comparaComThisArrow(global)
    comparaComThisArrow(module.exports)
