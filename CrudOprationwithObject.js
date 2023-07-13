// Create
const myObject = {}; // Create an empty object
myObject.name = 'John';
myObject.age = 25;

// Read
console.log(myObject.name); // Output: John
console.log(myObject.age); // Output: 25

// Update
myObject.age = 26; // Update the age
console.log(myObject.age); // Output: 26

// Delete
delete myObject.age; // Delete the age property
console.log(myObject.age); // Output: undefined