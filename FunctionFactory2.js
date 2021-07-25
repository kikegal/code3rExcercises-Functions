function criarProduto(nome, preco, desconto){
    return{
        nome,
        preco,
        desconto 
    }
}
console.log(criarProduto('Laptop', 1000, 0.1))