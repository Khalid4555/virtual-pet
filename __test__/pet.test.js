const Pet = require("../src/pet");

describe("Pet", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
});

describe("name", () => {
  it("sets the name property", () => {
    const pet = new Pet("Fido");

    expect(pet.name).toEqual("Fido");
  });
});

describe("growUp", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.age).toEqual(1);
  });

  it("increases hunger by 5", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.hunger).toEqual(5);
  });

  it("decreases the fitness by 3", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.fitness).toEqual(7);
  });
});

describe("walk", () => {
  it("increases fitness by 4", () => {
    const pet = new Pet("fido");

    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });
});

describe("feed", () => {
  it("decreases the hunger by 3 but does not go below 0", () => {
    const pet = new Pet("Fido");

    pet.hunger = 4;
    pet.feed();

    expect(pet.hunger).toEqual(1);
  });
});

describe("checkUp", () => {
  it("returns a string if both fitness is less than or equal to 3 and hunger is less than or equal to 5", () => {
    const pet = new Pet("Fido");

    pet.hunger = 5;
    pet.fitness = 3;

    expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
  });

  it("returns a i feel great if both fitness is greater than 3 and hunger is greater than 5", () => {
    const pet = new Pet("Fido");

    pet.hunger = 3;
    pet.fitness = 6;

    expect(pet.checkUp()).toEqual("I feel great!");
  });
});
describe("isAlive", () => {
  it("if the pet's fitness is 0 or less", () => {
    const pet = new Pet("Fido");

    pet.fitness = 0;

    expect(pet.isAlive).toEqual(false);
  });
  it("if the pet's hunger is 10 or more", () => {
    const pet = new Pet("Fido");

    pet.hunger = 9;

    expect(pet.isAlive).toEqual(true);
  });
  it("if the pet's age is 30 or more", () => {
    const pet = new Pet("Fido");

    pet.age = 32;

    expect(pet.isAlive).toEqual(false);
  });
});
