function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4530,
    desc: 0.15,
    getPreco
}
global.preco = 20  //Definiendo estos global con preco y desc si se definen las variables
global.desc = 0.1

console.log(getPreco())  //Llamando la función solo de esta forma el precio no esta definido porque no esta en this
console.log(produto.getPreco()) // Aqui si estamos llamando la función getPreco a partir del objeto produto

const carro = {preco: 49996, desc: 0.2} //creando este objeto 

console.log(getPreco.call(carro)) //Con call podemos llamar la funcion getPreco
console.log(getPreco.apply(carro)) // con Apply funciona de la misma forma

//DIFERENCIAS

console.log(getPreco.call(carro, 0.17, '$')) //Con call podemos pasar los parámetros directamente
console.log(getPreco.apply(carro, [0.17, '$'])) //Con apply se pasan los parámetros e un array

//Es la forma de pasar los parámetros que hace la diferencia entre call y apply