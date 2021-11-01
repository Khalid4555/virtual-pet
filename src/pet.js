function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
}
Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  },
};
Pet.prototype.growUp = function () {
  if (Pet.isAlive === false) {
    return "Your pet is no longer alive :(";
  } else this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};
Pet.prototype.walk = function () {
  if (Pet.isAlive === false) {
    return "Your pet is no longer alive :(";
  }
  if (this.fitness + 4 <= 10) {
    this.fitness += 4;
  } else {
    this.fitness = 10;
  }
};
Pet.prototype.feed = function () {
  if (Pet.isAlive === false) {
    return "Your pet is no longer alive :(";
  }
  if (this.hunger - 3 <= 0) {
    this.hunger = 0;
  } else {
    this.hunger -= 3;
  }
};
Pet.prototype.checkUp = function () {
  if (Pet.isAlive === false) {
    return "Your pet is no longer alive :(";
  }
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
