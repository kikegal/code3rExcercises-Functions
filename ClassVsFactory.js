class Pessoa {
    constructor(nome){ // "constructor" es palabra reservada
        this.nome = nome // utilizamos this para accesar a nome
    }
    falar (){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa ('Enrique')//instanciando la función
p1.falar()

const criarPessoa = nome =>{
    return{
        falar: () =>console.log(`Meu Nome é ${nome}`) //En este caso como no accesamos via this, siempre va a retornar el valor que toma de nome
    }
}

const p2 = criarPessoa('Alberto')
p2.falar()