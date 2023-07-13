//an object using prototypal inheritance in JavaScript, you can use constructor functions and the new keyword

// Define a constructor function
function Animal(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Add a method to the prototype of the constructor function
  Animal.prototype.sound = function() {
    console.log("Animal sound");
  };
  
  // Create a new object using the constructor function
  const animal = new Animal("Lion", 5);
  
  console.log(animal.name); // Output: Lion
  console.log(animal.age);  // Output: 5
  animal.sound();           // Output: Animal sound
  