let dobro = function (a){
    return 2 * a
}
console.log(`Sem arrow= ${dobro(6)}`)

dobro = (a) => {  // Function arrow =>
    return 2 * a
}
console.log(dobro(6))

dobro = a => 2 * a    //return implicito
console.log(dobro(10))
console.log(dobro(Math.PI))

ola = () => 'Olá' //algunas veces () es sustituido por _
console.log(ola())

