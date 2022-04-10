// OOP PRISTUP
console.log("****************** OOP *******************");
// I ovo je objektno-orijentirani "factory pattern"
class Animal {
  #numOfLegs; // Privatne varijable/metode se prefiksaju s "#" i ne može im se pristupit izvan klase

  constructor(animalName = "", numOfLegs = 4, hasTail = true) {
    this.name = animalName;
    this.#numOfLegs = numOfLegs;
    this.hasTail = hasTail;
  }

  getMessage() {
    // console.log("this:", this); // 'this' u klasi uvijek pokazuje na samu klasu
    // return "This " + this.name + " has " + this.#numOfLegs + " legs.";
    return `This ${this.name} has ${this.#numOfLegs} legs.`; // Bolje je koristit tzv. template strings -> ` -> ovaj znak se zove backtick
  }
}

const dogInstance = new Animal("Dog");
console.log("dog:", dogInstance);
console.log("dog message:", dogInstance.getMessage());

const chickenInstance = new Animal("Chicken", 2);
// chickenInstance.name = "Cat"; // Na ovakav način možeš promijenit ime životinje, ali ne i broj nogu jer je on privatan/skriven
console.log("chicken:", chickenInstance);
console.log("chicken message:", chickenInstance.getMessage());

// FUNKCIONALNI PRISTUP
console.log("****************** FUNCTIONAL *******************");
// Ovakav način kreiranja i vraćanja objekata se zove "factory pattern"
function createAnimal(animalName = "", numOfLegs = 4, hasTail = true) {
  return {
    name: animalName,
    numOfLegs: numOfLegs, // Može se skraćeno pisati kao samo -> numOfLegs
    hasTail,
    getMessage: () => `This ${animalName} has ${numOfLegs} legs.`, // Ovo je kraći način
    // getMessage: function () {
    //   console.log("this:", this); // Razlikuje se kod obične (function) funkcije i arrow funkcije
    //   return `This ${animalName} has ${numOfLegs} legs.`;
    // },
  };
}

// const dogAnimal = {
//   name: "Dog",
//   numOfLegs: 4,
//   hasTail: true,
// };
const dogAnimal = createAnimal("Dog");
console.log("dog:", dogAnimal);
console.log("dog message:", dogAnimal.getMessage());

// const chickenAnimal = {
//   name: "Chicken",
//   numOfLegs: 2,
//   hasTail: true,
// };
const chickenAnimal = createAnimal("Chicken", 2);
console.log("chicken:", chickenAnimal);
console.log("chicken message:", chickenAnimal.getMessage());
