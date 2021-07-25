let comparaComThis = function(param){
    console.log(this === param)
}
comparaComThis(global) // sem global resulta false

const obj = {}
comparaComThis = comparaComThis.bind(obj) 
comparaComThis(global)
comparaComThis(obj)

// Arrows

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)