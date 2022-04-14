// Ejemplo 3: Objeto con métodos
const myObject3 = {
  name: "Tulio",
  age: 2,
  nicknames: [
   "Tulipan",
    "Tulancingo",
    "Tulish"
  ],
  address: {
    zip_code: "10000",
    street: "Dr. Vertiz 11 Benito Juarez",
    city: "CDMX"
  }
}
console.log("Ejemplo 3: Objeto con metodos")
console.log(myObject3)
console.log(myObject3.name)
console.log(myObject3["address"])


const ajolonauta = {
    name: "Woopa",
    mission: "NodeJS",
    sayHelloToExplorers: function () {
        console.log("Soy el ajolonauta, que onda!")
    },
    tellMeMore: function () {
        return `Ajolonauta: ${this.name}`
    }
}

console.log("Ajolonauta:")
console.log(ajolonauta)
ajolonauta.sayHelloToExplorers()

console.log(ajolonauta.tellMeMore())