const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: [
      "js",
      "c#"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true
      }
    }
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: [
      "js"
    ],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: [
      "elixir"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  }
]

console.log("Parte 1: Nombres")
explorers.forEach(explorer => {
  console.log(explorer['name'])
})

console.log("Parte 2: Stack")
explorers.forEach(explorer => {
  console.log("El stack de "+ explorer['name'] +" es: " + explorer['stack'])
})

console.log("Parte 3: Nueva lista con los stack de los explorer")
const stackList = explorers.map((stack) => stack['stack'])
console.log(stackList)

console.log("Parte 4: Obtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en un lista se usa el método includes)")
const explorersContainingStackJS = explorers.filter((stackJS) => stackJS['stack'].includes('js'))
explorersContainingStackJS.forEach(explorerWithJS => {
  console.log(explorerWithJS['name'])
})

console.log("Busca el primer explorer que sea de la CDMX, usa FIND")
const explorerCDMX = explorers.find((explorerCDMX) => explorerCDMX['city'] === 'CDMX')
console.log(explorerCDMX['name'])

console.log("Obtén la suma de todos los exercises_completed, usa REDUCE")
const result_of_excercises_completed = explorers.reduce((acc, suma) => acc + suma['exercises_completed'], 0)
console.log(result_of_excercises_completed)

console.log("Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")
const frontFinished = explorers.some((finished) => finished['missions']['frontend']['exercisesFinished'] === true)
console.log("Al menos un explorer tiene la propiedad exercisesFinished como true: " + frontFinished)

console.log("Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.")
const allExplorerFinished = explorers.every((onboardingFinished) => onboardingFinished['missions']['onboarding']['isFinished'] == true)
console.log(allExplorerFinished)