class pokemon{
    constructor (name){
        this.name = name
    }

    sayHello () {
        console.log(`Mi pokémon ${this.name} te saluda!!!`)
    }

    sayMessage(message){
        console.log(`Mi pokémon ${this.name} dice: ${message}`)
    }

}

module.exports = pokemon