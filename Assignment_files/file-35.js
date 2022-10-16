const animalName = ["lion", "Dog", "Dear"];

for (const Animal of animalName) {
  if (Animal === "lion") {
    console.log(`${Animal} Known as King`);
  }
  else if (Animal === "Dog") {
    console.log(`${Animal} Is Such a Loyal Animal`);
  }
  else if (Animal === "Dear") {
    console.log(`${Animal} Is Such Beautiful Animal`);
  }
}
