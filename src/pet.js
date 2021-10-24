const Pet = require("../src/pet");

function Pet(name, age) {
  this.name = name;
  this.age = 0;
  this.growUp = () => {
    return (this.age += 1);
  };
}

const fido = new Pet("Fido");
const rex = new Pet("Rex");

console.log(fido);

module.exports = Pet;
