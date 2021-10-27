const Pet = require("../src/pet");

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
}
Pet.prototype.growUp = () => {
  return (this.age += 1), (this.hunger += 5), (this.fitness -= 3);
};
Pet.prototype.walk = function () {
  if (this.fitness + 4 <= 10) {
    this.fitness += 4;
  } else {
    this.fitness = 10;
  }
};
Pet.prototype.feed = function () {
  if (this.hunger - 3 <= 0) {
    this.hunger = 0;
  } else {
    this.hunger += 3;
  }
};
Pet.prototype.checkUp = function () {
  if (this.fitness <= 3 && this.hunger >= 5) {
    return "I am hungry AND I need a walk";
  } else if (this.fitness <= 3) {
    return "I need a walk";
  } else if (this.hunger >= 5) {
    return "I am hungry";
  } else return "I feel great!";
};

const fido = new Pet("Fido");

module.exports = Pet;
