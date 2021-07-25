//Uma função Factory é aquela que retorna um Objeto

// Factory simples
function criarPessoa(){
    return{
        nome:'Ana',
        sobrenome:'Silva'
    }
}
console.log(criarPessoa())