function Pessoa(){
    this.idade = 0

    setInterval(() => {  //criando uma function literal por meio do =>
        this.idade++
        console.log(this.idade)
    },5000)
}

new Pessoa