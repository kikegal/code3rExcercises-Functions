const soma = function (x, y){
    return x + y
}

// console.log(soma(2,10))

const imprimiResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}
imprimiResultado(2, 5)
imprimiResultado(2, 3, soma)
imprimiResultado(3, 4, function(x, y){
    return x - y
})

imprimiResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function(){
        console.log('Olá')
    }
}
pessoa.falar()


