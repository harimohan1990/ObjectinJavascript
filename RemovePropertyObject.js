// Sample object
let person = {
  name: 'Makk',
  age: 25,
  city: 'Japan'
};

console.log('Before:', person);

// "Before:"
// [object Object] {
//   age: 25,
//   city: "Japan",
//   name: "Makk"
// }

// Remove the 'age' property
delete person.age;

console.log('After:', person);

// "After:"
// [object Object] {
//   city: "Japan",
//   name: "Makk"
// }