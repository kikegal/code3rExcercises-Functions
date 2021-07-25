//Convirtiendo una clase en función constructora

function Pessoa (nome)  {              //Del ejemplo anterior class es sustituido por function
            //constructor ya no vá y los parámetros son pasados
        this.nome = nome 
        this.falar = function(){
            console.log(`Meu nome é ${this.nome}`)
        }
    }

const p1 = new Pessoa ('Enrique')//instanciando la función
p1.falar()

//NOTA IMPORTANTE: en el caso de Class y función Constructora es necesario el this, ya en Factory no.
