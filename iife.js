// IIFE Inmediality Invoked Function Expression

(function(){
    console.log('Será executado')
    console.log('Também executado')
})()
//El hecho de encerrar la función entre paréntesis crea esa exución automática de la función
// Normalmente es usado para huir del escopo global
//Cuaquier cosa que este dentro de la función es lo que va a ser executado.
