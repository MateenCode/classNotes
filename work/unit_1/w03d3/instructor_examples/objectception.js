// console.log('objects are cool')

// Create an adventurer
const adventurer = {
  name: 'Timothy',
  hitpoints: 10,
  belongings: ['sword', 'potion', 'Tums'],
  companion: {
    name: 'Velma',
    type: 'Bat'
  }
}

// access a property of our adventurer's belongings
// console.log(adventurer.belongings[0])

// iterate over each item in our adventurer's belongings
// for (let i = 0; i < adventurer.belongings.length; i++) {
//   console.log(adventurer.belongings[i])
// }

// add a Vogue Magazine to our adventurer's belongings
adventurer.belongings.push('Vogue Magazine')
// console.log to confirm that we did add the magazine
// console.log(adventurer.belongings)

// check that we added the companion
// console.log(adventurer.companion.name)
// adventurer and companion can have a name
// console.log(adventurer.name)

// change companion's name
adventurer.companion.name = 'Susan'
// console.log(adventurer.companion.name)

// add another companion to our adventurer
adventurer.companion2 = {
  name: 'Mr Fly',
  type: 'fly'
}

// console.log(adventurer)

// give the companion a companion
adventurer.companion.companion = {
  name: 'Tim',
  type: 'Parasite'
}

// the companion's companion's type
// console.log(adventurer.companion.companion.type)
// adventurer.companion.companion.belongings = [
//   'SCUBA Tank',
//   'Rogan Josh',
//   'Health Insurance'
// ]
// another way to format
adventurer
  .companion
    .companion
      .belongings = [
        'SCUBA Tank',
        'Rogan Josh',
        'Health Insurance'
      ]
// console.log(adventurer.companion.companion.belongings[2])

const movies = [
  {
    title: 'Tokyo Story'
  },
  {
    title: 'Paul Blart: Mall Cop'
  },
  {
    title: "L'Avventura"
  }
]

// console.log(movies[0].title)

// for (let i = 0; i < movies.length; i++){
//   console.log(movies[i].title)
// }


const monster = {
  name: 'Slimer',
  age: 6
}

const someVar = 'name'

// console.log(monster.name)
// console.log(monster['name'])
// console.log(monster[someVar])

// const movie = {
//   title: "L'Avventura",
//   director: "Michelangelo Antonioni",
//   year: 1960
// }

// prints each key
// for (let key in movie) {
//   console.log(key)
// }
let key = {
  color: 'gold',
  notches: 7,
}

// console.log(key)
// print each value of our object
// for (let key in movie) {
//   console.log(movie[key])
// }

// console.log(key)

// create an array of object keys
// const keysArray = Object.keys(movie)
// console.log(keysArray)

// for (let i = 0; i < keysArray.length; i++) {
//   console.log(movie[keysArray[i]])
// }

const movie = { title: "Eraserhead", director: "David Lynch", year: 1978 }

// for (let key in movie) {
//   console.log(movie[key])
// }

const movieKeys = Object.keys(movie)

for (let i = 0; i < movieKeys.length; i++) {
  console.log(movie[movieKeys[i]])
}
